import React, { useEffect } from "react";
import fireDbRef, { userName, db } from "../../config/firebase";
import { connect } from "react-redux";
import MainScreen from "./meeting/mainScreen";
import {
    setMainStream,
    addParticipant,
    setUser,
    removeParticipant,
    updateParticipant,
} from "../../store/meetsReducers/actionCreator";
import styles from './styles.module.scss'

function HomeVideoMeet(props) {
    const getUserStream = async () => {
        const localStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        return localStream;
    };
    useEffect(() => {
        async function a() {
            const stream = await getUserStream();
            stream.getVideoTracks()[0].enabled = false;
            props.setMainStream(stream);
            connectedRef.on("value", (snap) => {
                if (snap.val()) {
                    const defaultPreference = {
                        audio: true,
                        video: false,
                        screen: false,
                    };
                    const userStatusRef = participantRef.push({
                        userName,
                        preferences: defaultPreference,
                    });
                    props.setUser({
                        [userStatusRef.key]: { name: userName, ...defaultPreference },
                    });
                    userStatusRef.onDisconnect().remove();
                }
            });
        }
        a();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const connectedRef = db.database().ref(".info/connected");
    const participantRef = fireDbRef.child("participants");

    const isUserSet = !!props.user;
    const isStreamSet = !!props.stream;

    useEffect(() => {
        if (isStreamSet && isUserSet) {
            participantRef.on("child_added", (snap) => {
                const preferenceUpdateEvent = participantRef
                    .child(snap.key)
                    .child("preferences");
                preferenceUpdateEvent.on("child_changed", (preferenceSnap) => {
                    props.updateParticipant({
                        [snap.key]: {
                            [preferenceSnap.key]: preferenceSnap.val(),
                        },
                    });
                });
                const { userName: name, preferences = {} } = snap.val();
                props.addParticipant({
                    [snap.key]: {
                        name,
                        ...preferences,
                    },
                });
            });
            participantRef.on("child_removed", (snap) => {
                props.removeParticipant(snap.key);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isStreamSet, isUserSet]);
    return (
        <div className={styles.app}>
            {
                <MainScreen />
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        stream: state.mainStream,
        user: state.currentUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMainStream: (stream) => dispatch(setMainStream(stream)),
        addParticipant: (user) => dispatch(addParticipant(user)),
        setUser: (user) => dispatch(setUser(user)),
        removeParticipant: (userId) => dispatch(removeParticipant(userId)),
        updateParticipant: (user) => dispatch(updateParticipant(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeVideoMeet);