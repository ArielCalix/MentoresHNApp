import React from "react";
import styled from "styled-components";
import About from "./Sections/About";
import Coments from "./Sections/Coments";
import Contact from "./Sections/Contact";
import Facts from "./Sections/Facts";
import Resume from "./Sections/Resume";
import Services from "./Sections/Services";
import Skills from "./Sections/Skills";

const Header1 = styled.h1``

const Main = styled.main`
margin-left: 300px;
.section {
    padding: 60px 0;
    overflow: hidden;
    div.header-section {
        h2 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            padding-bottom: 20px;
            position: relative;
            color: ${props => props.theme.textColorDark};
            &::after {
                content: "";
                position: absolute;
                display: block;
                width: 50px;
                height: 3px;
                background: ${props => props.theme.mainBrand};
                bottom: 0;
                left: 0;
            }
        }
        p {
            margin-bottom: 0;
        }
    }
    &.section-bg {
        background: ${props => props.theme.lightShades};
    }
    .body-section {
        margin-top: 1em; 
    }
}
`
const HeaderSection = styled.section`
width: 100%;
height: 100vh;
background-size: cover;
&::before {
    content: "";
    background: ${props => props.theme.mainBrandTransparent};
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
`

const HeaderContainer = styled.div`
position: relative;
z-index: 2;
min-width: 300px;
${Header1} {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: ${props => props.theme.textColor};
}
p {
    color: ${props => props.theme.textColor};
    margin-bottom: 50px;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
    span {
        color: ${props => props.theme.textColor};
        padding-bottom: 4px;
        letter-spacing: 1px;
        border-bottom: 3px solid ${props => props.theme.lightAccent};
    }
}`

export const ProfileSections = ({ TrainerName, TrainerSkills, TrainerImageBackGround, TrainerId, ProfileSectionsData }) => {
    const style = {
        background: `url(${TrainerImageBackGround}) top center`
    };
    return <React.Fragment>
        <HeaderSection style={style} className="d-flex flex-column justify-content-center align-items-center">
            <HeaderContainer data-aos="fade-in">
                <Header1>{TrainerName}</Header1>
                <p>Soy <span className="typed" data-typed-items={TrainerSkills}></span></p>
            </HeaderContainer>
        </HeaderSection>

        <Main id="main">
            {(ProfileSectionsData[0].isEnabled) ? <About TrainerId={TrainerId} /> : <></>}
            {(ProfileSectionsData[1].isEnabled) ? <Resume TrainerId={TrainerId} TrainerName={TrainerName} /> : <></>}
            {(ProfileSectionsData[2].isEnabled) ? <Skills TrainerId={TrainerId} /> : <></>}
            {(ProfileSectionsData[3].isEnabled) ? <Services TrainerId={TrainerId} /> : <></>}
            {(ProfileSectionsData[4].isEnabled) ? <Facts TrainerId={TrainerId} /> : <></>}
            {(ProfileSectionsData[5].isEnabled) ? <Coments /> : <></>}
            {(ProfileSectionsData[6].isEnabled) ? <Contact TrainerId={TrainerId} /> : <></>}
        </Main>
    </React.Fragment>
}