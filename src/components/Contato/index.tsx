import { useState } from 'react'
import * as S from './styles'

const Contato = () => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>Nome do contato</S.Titulo>
      <S.Tag>Favoritos</S.Tag>
      <S.Tag>Normal</S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato
