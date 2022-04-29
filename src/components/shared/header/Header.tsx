import styled from 'styled-components'

export const Header = styled.header`
  background: ${props => props.theme.lightShades};
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  box-shadow: 0px 0 18px ${props => props.theme.mainBrandTransparent};
`