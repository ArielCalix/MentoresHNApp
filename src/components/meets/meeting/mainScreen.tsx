import React, { useRef, useEffect } from "react";
import MeetingFooter from "./meetingFooter";
import Participants from "./partipants/participants";
import { connect } from "react-redux";
import { removeParticipant, setMainStream, updateUser } from "../../../store/meetsReducers/actionCreator";
import styled from "styled-components";

const WrapperContainer = styled.div`
width: 100%;
`

const Screen = styled.div`
width: 100%;
height: 90vh;
background: #3c4043;
`

const Footer = styled.div`
height: 10vh;
`

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
        const localStream = props.stream;
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
    const onCallEnd = () => {
        let meetParticipantsRef = props.meetParticipantsRef;
        const currentId = Object.keys(props.currentUser)[0];
        meetParticipantsRef.child(currentId).remove(() => {
            props.removeParticipant(currentId);
            window.history.replaceState(null, "", "");
            window.location.href = "/";
        })
    }
    return (
        <WrapperContainer>
            <Screen>
                <Participants />
            </Screen>

            <Footer>
                <MeetingFooter
                    onScreenClick={onScreenClick}
                    onMicClick={onMicClick}
                    onVideoClick={onVideoClick}
                    onCallEnd={onCallEnd}
                />
            </Footer>
        </WrapperContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        stream: state.mainStream,
        participants: state.participants,
        currentUser: state.currentUser,
        meetParticipantsRef: state.meetParticipantsRef
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMainStream: (stream) => dispatch(setMainStream(stream)),
        updateUser: (user) => dispatch(updateUser(user)),
        removeParticipant: (userId) => dispatch(removeParticipant(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
