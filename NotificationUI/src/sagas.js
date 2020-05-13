import { all } from "redux-saga/effects";
import { RegisterSaga } from "./ReduxContainers/registerAndLogin";

export default function* rootSaga() {
    yield all([RegisterSaga()]);
}