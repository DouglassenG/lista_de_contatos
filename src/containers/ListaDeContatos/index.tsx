import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter((item) => item.nome.toLowerCase().search(termo) >= 0)
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = 'todas'
    const complementacao =
      termo !== undefined && termo.length > 0 ? `"${termo}"` : ''

    if (termo && termo.length > 0) {
      mensagem = `${quantidade} contato(s) encontrado(s) como: ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s)`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <p>{mensagem}</p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
