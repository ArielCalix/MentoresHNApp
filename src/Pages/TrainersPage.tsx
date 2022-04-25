import React from 'react';
import { SocialContainer, SocialIcons, SocialLink } from '../components/Trainers/SocialContainer/SocialElements';
import { MemberBio, MemberContent, MemberTitle, MemberName, MemberContainer, MemberPhoto, MemberBioLink } from '../components/Trainers/TrainersInfo/TrainerInfo';
import logo from '../logo.svg';

//TODO: Para cada Entrenador, crear un Container.

export default function TrainersPage() {
    return <div className="row" data-aos="zoom-in" data-aos-delay="100">
        <Container></Container>
    </div>
}

function Container() {
    return <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <MemberContainer>
            <MemberPhoto src={logo} />
            <MemberContent>
                <MemberBioLink href="/iPortfolio/profile.html">
                    <MemberName>Walter White</MemberName>
                    <MemberTitle>Web Development</MemberTitle>
                </MemberBioLink>
                <MemberBio>
                    Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut
                    aut aut
                </MemberBio>
                <SocialContainer>
                    <SocialLink>
                        <SocialIcons className="bi bi-twitter"></SocialIcons>
                    </SocialLink>
                </SocialContainer>
            </MemberContent>
        </MemberContainer>
    </div>
}