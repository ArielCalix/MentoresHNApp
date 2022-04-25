import styled from 'styled-components'

export const DefaultButton = styled.button`
  margin-left: 22px;
  margin-bottom: 1em;
  background: ${props => props.theme.mainBrand};
  color: ${props => props.theme.textColor};
  border-radius: 50px;
  padding: 8px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
  border: 0em;
  &:hover {
    background: ${props => props.theme.textColor};
    color: ${props => props.theme.textColorDark};
    border: 1px solid ${props => props.theme.textColorDark};
  }
`

export const SuccessButton = styled(DefaultButton)`
  background: ${props => props.theme.success};
  color: ${props => props.theme.textColor};

  &:hover {
    background: ${props => props.theme.successTransparent};
    color: ${props => props.theme.success};
    border: 1px solid ${props => props.theme.success};
  }
`

export const DangerButton = styled(DefaultButton)`
  background: ${props => props.theme.danger};
  color: ${props => props.theme.textColor};
  
  &:hover {
    background: ${props => props.theme.dangerTransparent};
    color: ${props => props.theme.danger};
    border: 1px solid ${props => props.theme.danger};
  }
`

export const WarningButton = styled(DefaultButton)`
  background: ${props => props.theme.warning};
  color: ${props => props.theme.textColor};
  
  &:hover {
    background: ${props => props.theme.warningTransparent};
    color: ${props => props.theme.warning};
    border: 1px solid ${props => props.theme.warning};
  }
`