import React, {useEffect, useState} from "react";
import * as bookService from '../service/BookService'
import {Link, useNavigate} from "react-router-dom";


export function BookList() {

    const [bookList,setBookList]=useState([]);
useEffect(()=>{
    const fetchApi=async ()=>{
        const result=await bookService.findAll();
        setBookList(result);
    }
    fetchApi();
},[])

    const handleDelete = (id) => {
        const updatedBookList = bookList.filter((book) => book.id !== id);
        setBookList(updatedBookList);
    };

    // const handleUpdate = (id) => {
    //     const updatedBookList = bookList.map((book) => {
    //         if (book.id === id) {
    //             return { ...book, title: 'Updated Title', quantity: 10 };
    //         }
    //         return book;
    //     });
    //     setBookList(updatedBookList);
    // };

    return(
    <>

        <table border={1}>
            <thead>
            <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                bookList.map((book)=>(
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <button type="button" onClick={() => handleDelete(book.id)}>Xóa</button>
                        <td>
                            <Link to={`/update-book/${book.id}`}>Xửa</Link>
                        </td>
                    </tr>
                ))
            }
            </tbody>

        </table>
        </>
)
}
