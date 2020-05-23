import { all } from "redux-saga/effects";
import { RegisterSaga } from "./ReduxContainers/registerAndLogin";
import { NotificationSaga } from './ReduxContainers/Notifications';

export default function* rootSaga() {
    yield all([RegisterSaga(), NotificationSaga()]);
}