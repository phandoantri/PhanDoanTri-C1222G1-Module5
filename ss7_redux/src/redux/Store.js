import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/UseSaga"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;