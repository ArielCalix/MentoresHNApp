import React from 'react';
import { HeaderProfile } from '../components/Trainers/Profile/ProfileHeader';
import picture from '../assets/img/trainers/trainer-1.jpg';

const Socials = [
    {
        Name: "twitter",
        url: "https://twitter.com/ArielCalix_91"
    },
    {
        Name: "facebook",
        url: "https://twitter.com/ArielCalix_91"
    },
    {
        Name: "instagram",
        url: "https://twitter.com/ArielCalix_91"
    },
    {
        Name: "google-plus",
        url: "https://twitter.com/ArielCalix_91"
    },
    {
        Name: "linkedin",
        url: "https://twitter.com/ArielCalix_91"
    },
]

const TrainerData = {
    TrainerName: "Ariel Calix",
    TrainerPicture: picture
}

export default function TrainerProfilePage() {
    return <HeaderProfile TrainerData={TrainerData} Socials={Socials}></HeaderProfile>
}