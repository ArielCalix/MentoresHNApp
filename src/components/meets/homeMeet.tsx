import React, { useState, ChangeEvent, useEffect } from 'react';
import {
    setMainStream,
    addParticipant,
    setUser,
    removeParticipant,
    updateParticipant,
} from '../../store/meetsReducers/actionCreator';
import { connect } from 'react-redux'
import fireDbRef, { db } from '../../config/firebase';
import MainScreen from "./meeting/mainScreen";
import { SuccessButton } from '../shared/buttons/Button';
let meetRef = fireDbRef;
let meetParticipantsRef;

function HomeMeet(props) {
    const [isUserSet, setIsUserSet] = useState(false);
    const [userName, setUserName] = useState("")
    const [roomId, setRoomId] = useState("")
    const getUserStream = async () => {
        const localStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        return localStream;
    };
    useEffect(() => {
        const urlparams = new URLSearchParams(window.location.search);
        setRoomId(urlparams.get("id"));
        async function a() {
            const stream = await getUserStream();
            stream.getVideoTracks()[0].enabled = true;
            props.setMainStream(stream);
        }
        a();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const submitMeet = (e) => {
        let connectedRef;
        if (roomId !== "") {
            meetRef = meetRef.child(roomId);
            window.history.replaceState(null, "", "meet?id=" + meetRef.key);
            meetParticipantsRef = meetRef.child("participants");
            connectedRef = db.database().ref(".info/connected");
        } else {
            meetRef = meetRef.push();
            window.history.replaceState(null, "", "meet?id=" + meetRef.key);
            meetParticipantsRef = meetRef.child("participants");
            connectedRef = db.database().ref(".info/connected");
        }
        connectedRef.on("value", (snap) => {
            if (snap.val()) {
                const defaultPreference = {
                    audio: true,
                    video: false,
                    screen: false,
                };
                const userStatusRef = meetParticipantsRef.push({
                    userName,
                    preferences: defaultPreference,
                });
                props.setUser({
                    [userStatusRef.key]: { name: userName, ...defaultPreference },
                }, meetRef, meetParticipantsRef);
                userStatusRef.onDisconnect().remove();
            }
        });
        setIsUserSet(true)
        props.onClick();
    }
    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }
    const setRoom = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomId(e.target.value)
    }
    const userIsSet = (userName) ? true : false;
    const isStreamSet = (props.stream) ? true : false;

    useEffect(() => {
        if (isStreamSet && userIsSet && meetRef) {
            meetParticipantsRef.on("child_added", (snap) => {
                const preferenceUpdateEvent = meetParticipantsRef
                    .child(snap.key)
                    .child("preferences");
                preferenceUpdateEvent.on("child_changed", (preferenceSnap) => {
                    props.updateParticipant({
                        [snap.key]: {
                            [preferenceSnap.key]: preferenceSnap.val(),
                        },
                    }, meetRef, meetParticipantsRef);
                });
                const { userName: name, preferences = {} } = snap.val();
                props.addParticipant({
                    [snap.key]: {
                        name,
                        ...preferences,
                    },
                }, meetRef, meetParticipantsRef);
            });
            meetParticipantsRef.on("child_removed", (snap) => {
                props.removeParticipant(snap.key);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isStreamSet, isUserSet]);
    return <>
        {isUserSet && <MainScreen />}
        {!isUserSet && <div className="container mt-4">
            <div className='d-flex flex-column'>
                <div className='mb-3'>
                    <label className='form-label' data-for='userName'>Ingrese Su Nombre</label>
                    <input id='userName' className='form-control' onChange={setName} value={userName} type="text" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' data-for='roomId'>Ingrese el id de la Sala</label>
                    <input id='roomId' className='form-control' onChange={setRoom} value={roomId} type="text" />
                </div>
                <SuccessButton className='mt-' onClick={submitMeet} type="button">Ingresar</SuccessButton>
            </div>
        </div>
        }
    </>
}

const mapStateToProps = (state) => {
    return {
        stream: state.mainStream,
        user: state.currentUser,
        meetRef: state.meetRef,
        meetParticipantsRef: state.meetParticipantRef
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMainStream: (stream) => dispatch(setMainStream(stream)),
        addParticipant: (user, meetRef, meetParticipantsRef) => dispatch(addParticipant(user, meetRef, meetParticipantsRef)),
        setUser: (user, meetRef, meetParticipantsRef) => dispatch(setUser(user, meetRef, meetParticipantsRef)),
        removeParticipant: (userId) => dispatch(removeParticipant(userId)),
        updateParticipant: (user, meetRef, meetParticipantsRef) => dispatch(updateParticipant(user, meetRef, meetParticipantsRef)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMeet)

// export { fireDb }
