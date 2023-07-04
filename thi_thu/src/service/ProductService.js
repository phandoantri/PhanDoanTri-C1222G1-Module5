import axios from "axios";

export const findAll=async ()=>{
    try {
       let result=await axios.get("http://localhost:8080/api/product")
        return result.data;
    }catch (err) {
        console.log(err)
    }
}
export const deleteProduct=async (id)=>{
    await axios.delete(`http://localhost:8080/api/delete/${id}`)
}
export const createProduct=async (product)=>{
    try {
        await axios.post("http://localhost:8080/api/create-product",product)
    }catch (err) {
        console.log(err)
    }
}
