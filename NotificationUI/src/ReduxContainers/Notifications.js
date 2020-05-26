import { handlersDefaultCase } from './helpers';

import { put, select, takeLatest, call } from "redux-saga/effects";
import { postNotificationService, getYourCreatedNotification, myNotification } from "../Services/NotificationServices";


const PREFIX = "Notification";
const POST_NOTIFICATION = `${PREFIX}//POST_NOTIFICATION`;
const SET_LOADING = `${PREFIX}//SET_LOADING`;
const SET_ERRORS = `${PREFIX}//SET_ERRORS`;
const GET_YOUR_NOTIFICATION = `${PREFIX}//GET_YOUR_NOTIFICATION`;
const SET_NOTIFICATION = `${PREFIX}//SET_NOTIFICATION`;
const GET_MY_NOTIFICATION = `${PREFIX}//GET_MY_NOTIFICATION`;
const SET_MY_NOTIFICATION = `${PREFIX}//SET_MY_NOTIFICATION`;
const NOTIFICATION_DONE = `${PREFIX}//NOTIFICATION_DONE`;


const initState = {
    loading: false,
    error: "",
    yourCreatedNotification: [],
    myNotification: [],
    SendNotificationDone: false
};

const NotificationReducer = (state = initState, action = {}) => {
    const handlers = {
        [SET_LOADING]: () => ({ ...state, loading: action.payload }),
        [NOTIFICATION_DONE]: () => ({ ...state, SendNotificationDone: action.payload }),

        [SET_ERRORS]: () => ({ ...state, error: action.payload }),
        [SET_NOTIFICATION]: () => ({ ...state, yourCreatedNotification: action.payload }),
        [SET_MY_NOTIFICATION]: () => ({ ...state, myNotification: action.payload })


    };
    return handlersDefaultCase(handlers, action, state);
};

export const postNotification = data => ({ type: POST_NOTIFICATION, payload: data });
export const createdNotification = data => ({ type: GET_YOUR_NOTIFICATION, payload: data });
export const getMyNotification = data => ({ type: GET_MY_NOTIFICATION, payload: data });





export function* NotificationSaga() {
    yield takeLatest(POST_NOTIFICATION, postNotificationSaga);
    yield takeLatest(GET_YOUR_NOTIFICATION, getCreatedNotificationSaga);
    yield takeLatest(GET_MY_NOTIFICATION, getmyNotificationSaga);




}
function* getmyNotificationSaga(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const token = yield select(gettoken);
        const result = yield call(myNotification, token.data.token);
        yield put({ type: SET_MY_NOTIFICATION, payload: result });

        yield put({ type: SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: SET_ERRORS, payload: e });
        yield put({ type: SET_LOADING, payload: false });
    }
}
function* postNotificationSaga(action) {
    yield put({ type: SET_LOADING, payload: true });
    try {
        const token = yield select(gettoken);
        const result = yield call(postNotificationService, token.data.token, action.payload);
        yield put({ type: NOTIFICATION_DONE, payload: true });

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
export const getMyNotifications = state => state.NotificationReducer.myNotification;
export const getSuccessNotifications = state => state.NotificationReducer.SendNotificationDone;





export default NotificationReducer;