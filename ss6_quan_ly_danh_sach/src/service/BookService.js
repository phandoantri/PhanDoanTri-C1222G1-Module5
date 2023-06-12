import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/book")
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const create = async (book) => {
    try {
        const result = await axios.post("http://localhost:8080/book", book)
    } catch (err) {
        console.log(err)

    }

}
export const deleteBook = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/book/${id}`);
    } catch (err) {
        console.log(err)
    }
}
export const updateBook = async (id, updatedData) => {
    try {
        const result = await axios.put(`http://localhost:8080/book/${id}`, updatedData);
    } catch (err) {
        console.log(err);
    }
};
export const getById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/book/${id}`)
        return  result.data
    }catch (error) {
        console.log('error')
    }
};
