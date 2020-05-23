import { handlersDefaultCase } from './helpers';

import { put, select, takeLatest, call } from "redux-saga/effects";
import { postNotificationService, getYourCreatedNotification } from "../Services/NotificationServices";


const PREFIX = "Notification";
const POST_NOTIFICATION = `${PREFIX}//POST_NOTIFICATION`;
const SET_LOADING = `${PREFIX}//SET_LOADING`;
const SET_ERRORS = `${PREFIX}//SET_ERRORS`;
const GET_YOUR_NOTIFICATION = `${PREFIX}//GET_YOUR_NOTIFICATION`;
const SET_NOTIFICATION = `${PREFIX}//SET_NOTIFICATION`;


const initState = {
    loading: false,
    error: "",
    yourCreatedNotification: []
};

const NotificationReducer = (state = initState, action = {}) => {
    const handlers = {
        [SET_LOADING]: () => ({ ...state, loading: action.payload }),
        [SET_ERRORS]: () => ({ ...state, error: action.payload }),
        [SET_NOTIFICATION]: () => ({ ...state, yourCreatedNotification: action.payload }),


    };
    return handlersDefaultCase(handlers, action, state);
};

export const postNotification = data => ({ type: POST_NOTIFICATION, payload: data });
export const createdNotification = data => ({ type: GET_YOUR_NOTIFICATION, payload: data });




export function* NotificationSaga() {
    yield takeLatest(POST_NOTIFICATION, postNotificationSaga);
    yield takeLatest(GET_YOUR_NOTIFICATION, getCreatedNotificationSaga);



}

function* postNotificationSaga(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const token = yield select(gettoken);
        const result = yield call(postNotificationService, token.data.token, action.payload);

        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: SET_ERRORS, payload: e });
        yield put({ type: SET_LOADING, payload: false });
    }
}
function* getCreatedNotificationSaga(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const token = yield select(gettoken);
        const result = yield call(getYourCreatedNotification, token.data.token);
        yield put({ type: SET_NOTIFICATION, payload: result });

        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: SET_ERRORS, payload: e });
        yield put({ type: SET_LOADING, payload: false });
    }
}
export const gettoken = state => state.RegisterUser.token;
export const getLoading = state => state.NotificationReducer.loading;
export const getError = state => state.NotificationReducer.error;
export const getYourCreatedNotifications = state => state.NotificationReducer.yourCreatedNotification;



export default NotificationReducer;