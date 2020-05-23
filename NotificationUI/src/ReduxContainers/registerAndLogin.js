import { handlersDefaultCase } from './helpers';

import { put, select, takeLatest, call } from "redux-saga/effects";
import { register, login } from "../Services/loginAndRegister.servie";


const PREFIX = "USER";
const POST_USER = `${PREFIX}//POST_USER`;
const SET_LOADING = `${PREFIX}//SET_LOADING`;
const SET_ERRORS = `${PREFIX}//SET_ERRORS`;
const SET_USER = `${PREFIX}//SET_USER`;
const AUTH_USER = `${PREFIX}//AUTH_USER`;

const initState = {
    loading: false,
    error: "",
    token: ""
};

const RegisterUser = (state = initState, action = {}) => {
    const handlers = {
        [SET_LOADING]: () => ({ ...state, loading: action.payload }),
        [SET_USER]: () => ({ ...state, token: action.payload }),

        [SET_ERRORS]: () => ({ ...state, error: action.payload }),

    };
    return handlersDefaultCase(handlers, action, state);
};

export const RegisterUsers = user => ({ type: POST_USER, payload: user });
export const AuthUsers = user => ({ type: AUTH_USER, payload: user });


export function* RegisterSaga() {
    yield takeLatest(POST_USER, postUser);
    yield takeLatest(AUTH_USER, authUser);

}

function* postUser(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const result = yield call(register, action.payload);


        yield put({ type: SET_USER, payload: result });
        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: SET_ERRORS, payload: e });
        yield put({ type: SET_LOADING, payload: false });
    }
}

function* authUser(action) {
    console.log("here")
    yield put({ type: SET_LOADING, payload: true });
    try {
        const result = yield call(login, action.payload);


        yield put({ type: SET_USER, payload: result });
        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: SET_ERRORS, payload: e });
        yield put({ type: SET_LOADING, payload: false });
    }
}

export const getLoading = state => state.RegisterUser.loading;
export const getToken = state => state.RegisterUser.token;
export const getError = state => state.RegisterUser.error;


export default RegisterUser;