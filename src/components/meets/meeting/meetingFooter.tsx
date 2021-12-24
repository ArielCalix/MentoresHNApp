import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrophone,
    faVideo,
    faDesktop,
    faVideoSlash,
    faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import styles from "./stylesMeeting.module.scss";

const MeetingFooter = (props) => {
    const [streamState, setStreamState] = useState({
        mic: true,
        video: false,
        screen: false,
    });
    const micClick = () => {
        setStreamState((currentState) => {
            return {
                ...currentState,
                mic: !currentState.mic,
            };
        });
    };

    const onVideoClick = () => {
        setStreamState((currentState) => {
            return {
                ...currentState,
                video: !currentState.video,
            };
        });
    };

    const onScreenClick = () => {
        props.onScreenClick(setScreenState);
    };

    const setScreenState = (isEnabled) => {
        setStreamState((currentState) => {
            return {
                ...currentState,
                screen: isEnabled,
            };
        });
    };
    useEffect(() => {
        props.onMicClick(streamState.mic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [streamState.mic]);
    useEffect(() => {
        props.onVideoClick(streamState.video);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [streamState.video]);
    return (
        <div className={styles.meetingFooter}>
            <div
                className={styles.meetingIcons + (!streamState.mic ? " active" : "")}
                data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
                onClick={micClick}
            >
                <FontAwesomeIcon
                    icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
                    title="Mute"
                />
            </div>
            <div
                className={styles.meetingIcons + (!streamState.video ? " active" : "")}
                data-tip={streamState.video ? "Hide Video" : "Show Video"}
                onClick={onVideoClick}
            >
                <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
            </div>
            <div
                className={styles.meetingIcons}
                data-tip="Share Screen"
                onClick={onScreenClick}
            // disabled={streamState.screen}
            >
                <FontAwesomeIcon icon={faDesktop} />
            </div>
            <ReactTooltip />
        </div>
    );
};

export default MeetingFooter;