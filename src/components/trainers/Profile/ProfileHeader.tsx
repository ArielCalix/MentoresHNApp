import React from 'react';
import styled from 'styled-components';
import { ProfileSections } from './ProfileSections';

const Contenedor = styled.header`
position: fixed;
top: 0;
left: 0;
bottom: 0;
width: 300px;
transition: all ease-in-out 0.5s;
z-index: 9997;
transition: all 0.5s;
padding: 0 15px;
background: ${props => props.theme.mainBrand};
overflow-y: auto;
`
const Photo = styled.img``
const Header1 = styled.h1``
const Anchor = styled.a``

const Profile = styled.div`
${Photo} {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid ${props => props.theme.darkShades};
}
${Header1} {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    -moz-text-align-last: center;
    text-align-last: center;
    font-family: "Poppins", sans-serif;
}
`
const SocialLinks = styled.div`
${Anchor} {
    font-size: 18px;
    display: inline-block;
    background: ${props => props.theme.mainBrand};
    color: ${props => props.theme.textColor};
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}
`
const UnorderedList = styled.ul`
li {
    position: relative;
    white-space: nowrap;
}
`

const Navigation = styled.nav`
padding: 30px 0 0 0;
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
li {
    a {
      display: flex;
      align-items: center;
      color: ${props => props.theme.textColor};
      padding: 0.45em 0.5em;
      margin-bottom: 8px;
      transition: 0.3s;
      font-size: 15px;
      i {
          font-size: 24px;
          padding-right: 8px;
          color: ${props => props.theme.textColor};
      }
      &:hover, &.active, &.active:focus, li:hover > a {
        text-decoration: none;
        color: ${props => props.theme.textColorAlternative};
      }
      &:hover i, &.active i, &.active:focus i, li:hover > a i {
        color: ${props => props.theme.textColorAlternative};
      }
    }
}
`

const ProfileNavigation = () => {
    return <Navigation id="navbar" className="nav-menu navbar">
        <UnorderedList>
            <li><a href="../index.html" className="nav-link scrollto" ><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" ></i> <span>About</span></a></li>
            <li><a href="#facts" className="nav-link scrollto"><i className="bx bx-book-content"></i><span>Facts</span></a></li>
            <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Skills</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#coments" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Coments</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </UnorderedList>
    </Navigation>
}

export const HeaderProfile = ({ TrainerData, Socials }) => {
    const anchors = Socials.map((social, index) => {
        return <Anchor key={index} href={social.url}>
            <i className={`bx bxl-${social.Name}`}></i>
        </Anchor>
    })
    return <React.Fragment>

        <Contenedor>
            <div className="d-flex flex-column">
                <Profile className="profile">
                    <Photo src={TrainerData.TrainerPicture} alt={TrainerData.TrainerName} className="img-fluid rounded-circle" />
                    <Header1 className="text-light"><a href="index.html">{TrainerData.TrainerName}</a></Header1>
                    <SocialLinks className="social-links mt-3 text-center">
                        {anchors}
                    </SocialLinks>
                </Profile>
                <ProfileNavigation></ProfileNavigation>
            </div>
        </Contenedor>
        <ProfileSections></ProfileSections>
    </React.Fragment>
}