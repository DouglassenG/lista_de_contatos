import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #2ce110ff;
  color: #000;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
