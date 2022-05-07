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
// import HomeVideoMeet from './homeVideoMeet';
import MainScreen from "./meeting/mainScreen";
import { SuccessButton } from '../shared/buttons/Button';
let fireDb = fireDbRef;
let participantRef;

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
        async function a() {
            const stream = await getUserStream();
            stream.getVideoTracks()[0].enabled = false;
            props.setMainStream(stream);
        }
        a();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setUserNameToState = (e) => {
        if (roomId !== "") {
            fireDb = fireDb.child(roomId);
            window.history.replaceState(null, "", "meet?id=" + fireDb.key);
        } else {
            fireDb = fireDb.push();
            window.history.replaceState(null, "", "meet?id=" + fireDb.key);
        }
        console.log(fireDb.key)
        participantRef = fireDb.child("participants");
        const connectedRef = db.database().ref(".info/connected");
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
                console.log(userStatusRef.key)
                props.setUser({
                    [userStatusRef.key]: { name: userName, ...defaultPreference },
                });
                userStatusRef.onDisconnect().remove();
            }
        });
        setIsUserSet(true)
    }
    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }
    const setRoom = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomId(e.target.value)
    }
    const userIsSet = !!userName;
    const isStreamSet = !!props.stream;

    useEffect(() => {
        if (isStreamSet && userIsSet && participantRef) {
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
    return <>
        {isUserSet && <MainScreen />}
        {!isUserSet && <div className="container mt-4">
            <div className='d-flex flex-column'>
                <div className='mb-3'>
                    <label className='form-label' data-for='userName'>Ingrese Su Nombre</label>
                    <input id='userName' className='form-control' onChange={setName} value={userName} type="text" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' data-for='roomId'>Ingrese el id de la meet</label>
                    <input id='roomId' className='form-control' onChange={setRoom} value={roomId} type="text" />
                </div>
                <SuccessButton className='mt-' onClick={setUserNameToState} type="button">Ingresar</SuccessButton>
            </div>
        </div>
        }
    </>
}

const mapStateToProps = (state) => {
    return {
        stream: state.mainStream,
        user: state.currentUser,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMainStream: (stream) => dispatch(setMainStream(stream)),
        addParticipant: (user) => dispatch(addParticipant(user)),
        setUser: (user) => dispatch(setUser(user)),
        removeParticipant: (userId) => dispatch(removeParticipant(userId)),
        updateParticipant: (user) => dispatch(updateParticipant(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMeet)

export { fireDb }