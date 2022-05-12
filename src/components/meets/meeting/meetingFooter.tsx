import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrophone,
    faVideo,
    faVideoSlash,
    faMicrophoneSlash,
    faPhoneSlash,
    faArrowUpFromBracket
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import styled from 'styled-components';

const MeetingFoot = styled.div`
background: #202124;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const MeetingIcons = styled.div`
color: white;
border-radius: 50%;
background: #3c4043;
border-radius: 50%;
width: 40px;
height: 40px;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&.inactive {
    background-color: #ea4335;
}
&.end-call{
    background-color: #ea4335;
}
`

const MeetingFooter = (props) => {
    const [streamState, setStreamState] = useState({
        mic: true,
        video: false,
        screen: false,
    });
    const micClick = () => {
        props.onMicClick(!streamState.mic);
        setStreamState((currentState) => {
            return {
                ...currentState,
                mic: !currentState.mic,
            };
        });
    };

    const onVideoClick = () => {
        props.onVideoClick(!streamState.video);
        setStreamState((currentState) => {
            return {
                ...currentState,
                video: !currentState.video,
            };
        });
    };

    const onScreenClick = () => {
        props.onScreenClick(!streamState.screen);
        setStreamState((currentState) => {
            return {
                ...currentState,
                screen: !currentState.screen,
            };
        });
    };
    const onCallEnd = () => {
        props.onCallEnd()
    }
    return (
        <MeetingFoot>
            <MeetingIcons
                className={(streamState.mic ? "" : "inactive")}
                data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
                onClick={micClick}
            >
                <FontAwesomeIcon
                    icon={streamState.mic ? faMicrophone : faMicrophoneSlash}
                    title="Mute"
                />
            </MeetingIcons>
            <MeetingIcons
                className={(streamState.video ? "" : "inactive")}
                data-tip={streamState.video ? "Hide Video" : "Show Video"}
                onClick={onVideoClick}
            >
                <FontAwesomeIcon icon={streamState.video ? faVideo : faVideoSlash} />
            </MeetingIcons>
            <MeetingIcons
                data-tip="Share Screen"
                onClick={onScreenClick}
            >
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </MeetingIcons>
            <MeetingIcons
                className="end-call"
                data-tip="End Call"
                onClick={onCallEnd}
            >
                <FontAwesomeIcon icon={faPhoneSlash} />
            </MeetingIcons>
            <ReactTooltip />
        </MeetingFoot>
    );
};

export default MeetingFooter;
