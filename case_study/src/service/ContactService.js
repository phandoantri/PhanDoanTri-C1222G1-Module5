import axios from "axios";

export const findAll = async () => {
    try {
        let result = await axios.get("http://localhost:8080/contact");
        return result.data;
    } catch (err) {
        console.log(err)
    }
}
export const createContact = async (contact) => {
    try {
        let result = await axios.post("http://localhost:8080/contact", contact)
    } catch (err) {
        console.log(err)
    }
}
export const deleteContact = async (id) => {
    let result = await axios.delete(`http://localhost:8080/contact/${id}`);
}
export const updateContact = async (id, contact) => {
    try {
        let result = await axios.put(`http://localhost:8080/contact/${id}`, contact)
    } catch (err) {
        console.log(err)

    }
}
export const getContactById = async (id) => {
    try {
        let result = await axios.get(`http://localhost:8080/contact/${id}`)
        return result.data;
    } catch (err) {
        console.log(err)

    }
}