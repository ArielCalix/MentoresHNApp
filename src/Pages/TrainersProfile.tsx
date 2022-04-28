import React from 'react';
import { ProfileHeader } from '../Components/Trainers/Profile/ProfileHeader';
import { ProfileSections } from '../Components/Trainers/Profile/ProfileSections';


const TrainerData = { "TrainerName": "Kendra.Adams32", "TrainerPicture": "http://placeimg.com/640/480/people", "TrainerImage": "http://placeimg.com/640/480/fashion", "TrainerSkills": "Designer, Developer, Freelancer, Photographer", "TrainerSocials": [{ "name": "twitter", "url": "https://twitter.com/ArielCalix_91" }, { "name": "facebook", "url": "https://twitter.com/ArielCalix_91" }, { "name": "instagram", "url": "https://twitter.com/ArielCalix_91" }, { "name": "google-plus", "url": "https://twitter.com/ArielCalix_91" }, { "name": "linkedin", "url": "https://twitter.com/ArielCalix_91" }], "Sections": [{ "SectionName": "Sobre mí", "SectionIcon": "bx-book", "isEnabled": true, "SectionId": "about" }, { "SectionName": "Hoja de Vida", "SectionIcon": "bx-file-blank", "isEnabled": true, "SectionId": "resume" }, { "SectionName": "Habilidades", "SectionIcon": "bx-spreadsheet", "isEnabled": true, "SectionId": "skills" }, { "SectionName": "Servicios", "SectionIcon": "bx-server", "isEnabled": true, "SectionId": "services" }, { "SectionName": "Logros", "SectionIcon": "bx-file", "isEnabled": true, "SectionId": "facts" }, { "SectionName": "Reseñas", "SectionIcon": "bx-comment", "isEnabled": true, "SectionId": "coments" }, { "SectionName": "Contactame", "SectionIcon": "bx-envelope", "isEnabled": true, "SectionId": "contact" }], "TrainerId": "1" }

export default function TrainerProfilePage() {
    return <React.Fragment>
        <ProfileHeader TrainerData={TrainerData}/>
        <ProfileSections TrainerImageBackGround={TrainerData.TrainerImage} TrainerName={TrainerData.TrainerName} TrainerSkills={TrainerData.TrainerSkills} TrainerId={TrainerData.TrainerId} ProfileSectionsData={TrainerData.Sections} />
    </React.Fragment>

}