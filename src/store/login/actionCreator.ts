import * as actionType from './actionTypes';

export const setUserLogin = (userInfo) => {
    return {
        type: actionType.SET_USER_LOGIN,
        payload: {
            userName: userInfo.userName,
            password: userInfo.password
        },
    };
};

