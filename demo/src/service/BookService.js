import axios from "axios";

export const findAll=async() =>{
try {
    let result=await axios.get("http://localhost:8080/book")
    return result.data
}catch (err) {
    console.log(err)
}
}
export const deleteBook=async (id)=>{
    try {
      let result=  await axios.delete(`http://localhost:8080/book/${id}`);
    }catch (err) {
        console.log(err)
    }
}
export const create = async (book) => {
    try {
        let result = await axios.post("http://localhost:8080/book", book);
    } catch (err) {
        console.log(err)

    }
}
export const updateBook=async (id,book)=>{
    try {
        let result=await axios.put(`http://localhost:8080/book/${id}`,book)
    }catch (err) {
        console.log(err)
    }
}
export const getBookById=async (id)=>{
    try {
        let result=await axios.get(`http://localhost:8080/book/${id}`)
        return result.data
    }catch (err) {
        console.log(err)

    }
}
