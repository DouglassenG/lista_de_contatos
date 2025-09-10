import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <div>
        <S.Filtros>
          <FiltroCard legenda="Todos" contador={1} ativo />
          <FiltroCard legenda="Favoritos" contador={2} />
          <FiltroCard legenda="Recentes" contador={3} />
        </S.Filtros>
      </div>
    </div>
  </S.Aside>
)

export default BarraLateral
