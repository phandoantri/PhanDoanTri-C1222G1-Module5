import {DELETE_USE, GET_ALL_USE} from "../action/types";

const initState=[];
const userReducer=(users=initState,action)=>{
    const {type,payload}=action
    switch (type) {
        case GET_ALL_USE:
            return payload
        case DELETE_USE:
            return [...users,payload]
        default:
            return users;

    }
}
export default userReducer;