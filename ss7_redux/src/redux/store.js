import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from './reducer'

const initState={}
const middleware=[thunk]
const store=createStore(
    rootReducer,
    initState,
    applyMiddleware(...middleware)
)
export default store;