import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'João da silva',
    email: 'joaodasilva@exemplo.com',
    telefone: 4726384628
  },
  {
    nome: 'Pedro da silva',
    email: 'pedrodasilva@exemplo.com',
    telefone: 4726384628
  },
  {
    nome: 'Maria da silva',
    email: 'mariadasilva@exemplo.com',
    telefone: 4726384628
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {contatos.map((t) => (
        <li key={t.nome}>
          <Contato nome={t.nome} email={t.email} telefone={t.telefone} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
