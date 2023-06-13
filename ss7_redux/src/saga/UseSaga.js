import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
    DELETE_USER,
    DELETE_USER_SUCCESS,
    FETCH_USER,
    FETCH_USER_SUCCESS,
} from "../redux/Action";

function* getUser() {
    try {
        const response = yield axios.get(
            "http://localhost:8080/users"
        );
        yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}
function* deleteUser(action) {
    console.log(action);
    const response = yield axios.delete(
        "http://localhost:8080/users/" + action.payload
    );
    yield put({ type: DELETE_USER_SUCCESS, payload: response.payload });
}
export default function* rootSaga() {
    yield takeLatest(FETCH_USER, getUser);
    yield takeLatest(DELETE_USER, deleteUser);
}