import {
    SET_MAIN_STREAM,
    ADD_PARTICIPANT,
    SET_USER,
    REMOVE_PARTICIPANT,
    UPDATE_USER,
    UPDATE_PARTICIPANT,
} from "./actionTypes";

export const setMainStream = (stream) => {
    return {
        type: SET_MAIN_STREAM,
        payload: {
            mainStream: stream,
        },
    };
};

export const setUser = (user, meetRef, meetParticipantsRef) => {
    return {
        type: SET_USER,
        payload: {
            currentUser: user,
            meetRef: meetRef,
            meetParticipantsRef: meetParticipantsRef
        },
    };
};

export const addParticipant = (user, meetRef, meetParticipantsRef) => {
    return {
        type: ADD_PARTICIPANT,
        payload: {
            newUser: user,
            meetRef: meetRef,
            meetParticipantsRef: meetParticipantsRef
        },
    };
};

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: {
            currentUser: user,
        },
    };
};

export const updateParticipant = (user, meetRef, meetParticipantsRef) => {
    return {
        type: UPDATE_PARTICIPANT,
        payload: {
            newUser: user,
            meetRef: meetRef,
            meetParticipantsRef: meetParticipantsRef
        },
    };
};

export const removeParticipant = (userId) => {
    return {
        type: REMOVE_PARTICIPANT,
        payload: {
            id: userId,
        },
    };
};
