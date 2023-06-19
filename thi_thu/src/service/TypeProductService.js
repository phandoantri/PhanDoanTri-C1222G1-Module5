import axios from "axios";

export const findAll=async ()=>{
    try {
        let result=await axios.get("http://localhost:8080/api/type")
        return result.data;
    }catch (e) {
        console.log(e)
    }
}