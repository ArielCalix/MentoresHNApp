import React, { useState } from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
color: gray;
.mobile-nav-toggle {
  position: fixed;
  right: 10%;
  top: 15px;
  z-index: 9998;
  border: 0;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  background-color: ${props => props.theme.mainBrand};
  color: ${props => props.theme.textColor};
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50px;
  cursor: pointer;
}

.mobile-nav-active {
  overflow: hidden;
}
.mobile-nav-active #header {
  left: 0;
}
`

const Header = styled.header`
position: fixed;
top: 0;
bottom: 0;
width: 300px;
transition: all ease-in-out 0.5s;
z-index: 9997;
transition: all 0.5s;
padding: 0 15px;
background: ${props => props.theme.mainBrand};
@media(max-width: 1199px) {
    left: -300px;
    &.show {
        left: 0px;
    }
}
overflow-y: auto;
`
const Photo = styled.img``
const Header1 = styled.h1``
const Anchor = styled.a``

const Profile = styled.div`
${Photo} {
    margin: 15px auto;
    display: block;
    height: 120px;
    width: 120px;
    border: 2px solid ${props => props.theme.darkShades};
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
    background: ${props => props.theme.lightShades};
    color: ${props => props.theme.textColorDark};
    border: 1px solid ${props => props.theme.mainBrand};
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    &:hover {
        background: ${props => props.theme.textColorDark};
        color: ${props => props.theme.lightShades};
        border: 1px solid ${props => props.theme.lightShades};
    }
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

const ProfileNavigation = ({ Sections }) => {
    const mappedLi = Sections.map((section, index) => {
        if (section.isEnabled) {
            return <li key={index} ><a href={`#${section.SectionId}`} className="nav-link scrollto"><i className={`bx ${section.SectionIcon}`} ></i> <span>{section.SectionName}</span></a></li>
        } else return <></>
    })
    return <Navigation id="navbar" className="nav-menu navbar">
        <UnorderedList>
            <li><a href="../index.html" className="nav-link scrollto" ><i className="bx bx-home"></i> <span>Inicio</span></a></li>
            {mappedLi}
        </UnorderedList>
    </Navigation>
}

export const ProfileHeader = (props) => {
    const [mobileToggleState, setMobileToggleState] = useState('');
    const { TrainerData } = props;
    const anchors = TrainerData.TrainerSocials.map((social, index) => {
        return <Anchor key={index} href={social.url}>
            <i className={`bx bxl-${social.name}`}></i>
        </Anchor>
    })
    const updateStateToggle = () => {
        if (mobileToggleState === '') {
            setMobileToggleState('show');
        } else {
            setMobileToggleState('');
        }
    }
    return <Contenedor>

        <i onClick={updateStateToggle} className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header id="header" className={mobileToggleState}>
            <div className="d-flex flex-column">
                <Profile className="profile">
                    <Photo src={TrainerData.TrainerPicture} alt={TrainerData.TrainerName} className="img-fluid rounded-circle" />
                    <Header1 className="text-light"><a href="index.html">{TrainerData.TrainerName}</a></Header1>
                    <SocialLinks className="social-links mt-3 text-center">
                        {anchors}
                    </SocialLinks>
                </Profile>
                <ProfileNavigation Sections={TrainerData.Sections}></ProfileNavigation>
            </div>
        </Header>
    </Contenedor>
}