import axios from "axios";

export const findAll=async ()=>{
    try {
     let result=await axios.get("http://localhost:8080/products") ;
        return result.data;
    }catch (err) {
        console.log(err)
    }
}
export const createProduct=async (product)=>{
    try {
        let result=await axios.post("http://localhost:8080/products",product)
    }catch (err) {
        console.log(err)
    }
}
export const findByName=async (name)=>{
    try {
        let result=await axios.get(`http://localhost:8080/products?name_like=${name}`);
        return result.data;
    }catch (err) {
        console.log(err)
    }
}