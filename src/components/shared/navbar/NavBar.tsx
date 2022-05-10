import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
`

const ListItem = styled.li`
    position: relative;
`

const LinkItem = styled(Link)`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 0 10px 30px;
font-family: "Poppins", sans-serif;
font-size: 15px;
font-weight: 500;
color: ${props => props.theme.textColorDark};
white-space: nowrap;
transition: 0.3s;
&:hover {
    color: ${props => props.theme.textColorDark};
}
i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
}
`

export const NavBar = styled.nav`
padding: 0;
`

const Header1 = styled.h1`
font-size: 30px;
margin: 0;
padding: 0;
line-height: 1;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
font-family: "Poppins", sans-serif;
a {
    color: ${props => props.theme.textColorDark};
}
img {
    max-height: 40px;
}
`

export default function Navigation() {
    return <div className="container d-flex align-item-center">
        <Header1><a href="/index.html">Mentores HN</a></Header1>
        <NavBar className="navbar order-last order-lg-0">
            <UnorderedList>
                <ListItem>
                    <LinkItem to="/">Inicio</LinkItem>
                </ListItem>
                <ListItem>
                    <LinkItem to="/Meet">Reunirse</LinkItem>
                </ListItem>
                <ListItem>
                    <LinkItem to="/TrainersProfile">Perfil de Entrenador</LinkItem>
                </ListItem>
            </UnorderedList>
        </NavBar>
    </div>
}