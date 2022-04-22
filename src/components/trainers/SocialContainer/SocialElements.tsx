import styled from 'styled-components';

export const SocialLink = styled.a`
color: ${props => props.theme.textColorDark};
transition: 0.3s;
&:hover {
    color: ${props => props.theme.textColorDark};
}
`

export const SocialContainer = styled.div`
margin-top: 15px;
`

export const SocialIcons = styled.i`
font-size: 18px;
margin: 0 2px;
`