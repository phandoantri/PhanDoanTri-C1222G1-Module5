import axios from "axios";
export const findAll=async ()=>{
    try {
        const result= await axios.get("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books")
        return result.data
    }catch (error) {
        console.log(error)
    }
}