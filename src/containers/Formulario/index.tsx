import { MainContainer } from '../../styles'

const Formulario = () => (
  <MainContainer>
    <form>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Telefone" />
      <button>Salvar</button>
    </form>
  </MainContainer>
)

export default Formulario
