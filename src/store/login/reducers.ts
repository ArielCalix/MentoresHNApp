import * as actionTypes from './actionTypes'

const defaultUserLoginState = {
    userName: null,
    token: null,
    isLogged: false
}

export const loginReducer = (state = defaultUserLoginState, action) => {
    if (action.type === actionTypes.SET_USER_LOGIN) {
        let payload = action.payload;
        const tokenLocalStorage = getTokenLocalStorage()
        const tok = (tokenLocalStorage) ? tokenLocalStorage : "kjghnaligasbdfliusgdbfliuashdgfb"
        state = { userName: payload.userName, token: tok, isLogged: true };
        return state
    }
    return state

}

function getTokenLocalStorage() {
    return localStorage.getItem("TOKEN")
}
