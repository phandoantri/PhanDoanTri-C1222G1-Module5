import axios from "axios";

export const findAll=async() =>{
    try {
        let result=await axios.get("http://localhost:8080/service")
        return result.data
    }catch (err) {
        console.log(err)
    }
}