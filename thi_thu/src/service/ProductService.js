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
// export const deleteProduct=async (id)=>{
//     try {
//         let result=await axios.delete(`http://localhost:8080/${id}`);
//     }catch (err) {
//       console.log(err)  ;
//     }
// }
// export const createProduct=async (product)=>{
//     try {
//         let result=await axios.post("http://localhost:8080",product)
//     }catch (err) {
//         console.log(err)
//     }
// }
// export const getProductById=async (id)=>{
//     try {
//         let result=await axios.get(`http://localhost:8080/${id}`);
//         return result.data;
//     }catch (err) {
//         console.log(err)
//     }
// }
// export const updateProduct=async (id,product)=>{
// try {
//     let result= await axios.put(`http://localhost:8080/products/${id}`,product)
// }catch (err) {
//     console.log(err)
//
// }
// }
// export const findByName=async (name)=>{
//     try {
//         let result=await axios.get(`http://localhost:8080/products?name_like=${name}`)
//         return result.data
//     }catch (e) {
//         console.log(e)
//     }
//
// }