import { handlersDefaultCase } from './helpers';

import { put, select, takeLatest, call } from "redux-saga/effects";
import { register } from "../Services/loginAndRegister.servie";


const PREFIX = "USER";
const POST_USER = `${PREFIX}//POST_USER`;
const SET_LOADING = `${PREFIX}//SET_LOADING`;
const SET_ERRORS = `${PREFIX}//SET_ERRORS`;
const SET_USER = `${PREFIX}//SET_USER`;

const initState = {
    loading: false,
    error: "",
    user: {}
};

const RegisterUser = (state = initState, action = {}) => {
    const handlers = {
        [SET_LOADING]: () => ({ ...state, loading: action.payload }),
        [SET_USER]: () => ({ ...state, user: action.payload }),

        [SET_ERRORS]: () => ({ ...state, error: action.payload }),

    };
    return handlersDefaultCase(handlers, action, state);
};

const RegisterUsers = user => ({ type: POST_USER, payload: user });


export function* RegisterSaga() {
    yield takeLatest(POST_USER, postUser);

}

function* postUser(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const result = yield call(register, action.payload);

        if (result) {
            yield put({ type: SET_USER, payload: result });
        } else {
            yield put({ type: SET_ERRORS, payload: result.data.err });
        }

        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {

        yield put({ type: SET_LOADING, payload: false });
    }
}

export const getLoading = state => state.RegisterUser.loading;
// export const getuser = state => state.RegisterUser.user;

// export const geterror = state => state.RegisterUser.error;
// export const getNetworkError = state => state.RegisterUser.ISServerError;
// export const getVerified = state => state.RegisterUser.IsVerified;

export const RegisterUserActions = {
    RegisterUsers,

};

export default RegisterUser;