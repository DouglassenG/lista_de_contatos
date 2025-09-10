import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
