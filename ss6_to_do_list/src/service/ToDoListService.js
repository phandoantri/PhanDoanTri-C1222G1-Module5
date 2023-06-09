import axios from "axios";

export const save=async (toDo)=>{
try {
    const result= await axios.post("https://jsonplaceholder.typicode.com/todos",toDo)
}catch (error) {
    console.log(error)
}
}
export const findAll=async ()=>{
    try {
       const result=await axios.get("https://jsonplaceholder.typicode.com/todos")
        return result.data
    }catch (error) {
        console.log(error)
    }
}