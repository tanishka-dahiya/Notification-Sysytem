import { handlersDefaultCase } from './helpers';

import { put, select, takeLatest, call } from "redux-saga/effects";
import { postNotificationService } from "../Services/NotificationServices";


const PREFIX = "Notification";
const POST_NOTIFICATION = `${PREFIX}//POST_NOTIFICATION`;
const SET_LOADING = `${PREFIX}//SET_LOADING`;
const SET_ERRORS = `${PREFIX}//SET_ERRORS`;


const initState = {
    loading: false,
    error: ""
};

const NotificationReducer = (state = initState, action = {}) => {
    const handlers = {
        [SET_LOADING]: () => ({ ...state, loading: action.payload }),
        [SET_ERRORS]: () => ({ ...state, error: action.payload }),

    };
    return handlersDefaultCase(handlers, action, state);
};

export const postNotification = data => ({ type: POST_NOTIFICATION, payload: data });



export function* NotificationSaga() {
    yield takeLatest(POST_NOTIFICATION, postNotificationSaga);


}

function* postNotificationSaga(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const token = yield select(gettoken);
        // console.log(token.data.token)
        const result = yield call(postNotificationService, action.payload, token);

        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: SET_ERRORS, payload: e });
        yield put({ type: SET_LOADING, payload: false });
    }
}
export const gettoken = state => state.RegisterUser.user;
export const getLoading = state => state.RegisterUser.loading;
export const getError = state => state.RegisterUser.error;


export default NotificationReducer;