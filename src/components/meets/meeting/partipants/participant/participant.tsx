import React from "react";
import Card from "../../../card/card";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'

const ParticipantContainer = styled.div`
background-color: #353b48;
height: 100%;
width: 100%;
position: relative;
border-radius: 5px;
min-height: 200px;
&.hide {
    display: none;
}
@media (max-width: 800px) {
    min-height: 0px;
}
`

const Avatar = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
font-size: 150px;
font-family: 'Roboto', sans-serif;
color: white;
text-align: center;
background: orange;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
@media (max-width: 800px) {
    width: 80px;
    height: 80px;
    font-size: 50px;
}
`

const Name = styled.div`
color: white;
bottom: 10px;
position: absolute;
left: 20px;
`

export const Participant = (props) => {
    const {
        curentIndex,
        currentParticipant,
        hideVideo,
        videoRef,
        showAvatar,
        currentUser,
    } = props;
    if (!currentParticipant) return <></>;
    return (
        <ParticipantContainer className={`${hideVideo ? "hide" : ""}`}>
            <Card>
                <video
                    ref={videoRef}
                    id={`participantVideo${curentIndex}`}
                    autoPlay
                    playsInline
                />
                {!currentParticipant.audio && (
                    <FontAwesomeIcon
                        className={'muted'}
                        icon={faMicrophoneSlash}
                        title="Muted"
                    />
                )}
                {showAvatar && (
                    <Avatar style={{ background: currentParticipant.avatarColor }}>
                        {currentParticipant.name[0]}
                    </Avatar>
                )}
                <Name>
                    {currentParticipant.name}
                    {currentUser ? "(You)" : ""}
                </Name>
            </Card>
        </ParticipantContainer>
    );
};
