import React, { useRef, useEffect } from "react";
import MeetingFooter from "./meetingFooter";
import Participants from "./partipants/participants";
import styles from './stylesMeeting.module.scss'
import { connect } from "react-redux";
import { setMainStream, updateUser } from "../../../store/meetsReducers/actionCreator";

const MainScreen = (props) => {
    const participantRef = useRef(props.participants);

    const onMicClick = (micEnabled) => {
        if (props.stream) {
            props.stream.getAudioTracks()[0].enabled = micEnabled;
            props.updateUser({ audio: micEnabled });
        }
    };
    const onVideoClick = (videoEnabled) => {
        if (props.stream) {
            props.stream.getVideoTracks()[0].enabled = videoEnabled;
            props.updateUser({ video: videoEnabled });
        }
    };

    useEffect(() => {
        participantRef.current = props.participants;
    }, [props.participants]);

    const updateStream = (stream) => {
        for (let key in participantRef.current) {
            const sender = participantRef.current[key];
            if (sender.currentUser) continue;
            const peerConnection = sender.peerConnection
                .getSenders()
                .find((s) => (s.track ? s.track.kind === "video" : false));
            peerConnection.replaceTrack(stream.getVideoTracks()[0]);
        }
        props.setMainStream(stream);
    };

    const onScreenShareEnd = async () => {
        const localStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        localStream.getVideoTracks()[0].enabled = Object.values(
            props.currentUser
        )[0]["video"];

        updateStream(localStream);

        props.updateUser({ screen: false });
    };

    const onScreenClick = async () => {
        let mediaStream;
        if (navigator.mediaDevices) {
            mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        } else if (navigator.mediaDevices.getDisplayMedia) {
            mediaStream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
            });
        }

        mediaStream.getVideoTracks()[0].onended = onScreenShareEnd;

        updateStream(mediaStream);

        props.updateUser({ screen: true });
    };
    return (
        <div className={styles.wrapper}>
            <div className={'d-flex ' + styles.mainScreen}>
                <Participants />
            </div>

            <div className={styles.footer}>
                <MeetingFooter
                    onScreenClick={onScreenClick}
                    onMicClick={onMicClick}
                    onVideoClick={onVideoClick}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        stream: state.mainStream,
        participants: state.participants,
        currentUser: state.currentUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMainStream: (stream) => dispatch(setMainStream(stream)),
        updateUser: (user) => dispatch(updateUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
