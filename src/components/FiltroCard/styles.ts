import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 4px solid ${(props) => (props.ativo ? '#de6808ff' : '#082f08ff')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#de6808ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 14px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
