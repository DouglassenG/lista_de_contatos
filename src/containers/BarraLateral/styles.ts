import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background: linear-gradient(to right, #e9ffe9ff, #c9f3f7ff);
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`

export const Filtros = styled.div`
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 14px;
    margin-top: 16px;
  }
`
