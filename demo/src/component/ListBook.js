import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService";
import {NavLink, useLocation} from "react-router-dom";

export function ListBook() {
    const [books,setBooks]=useState([])
    const location=useLocation();
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await bookService.findAll();
            setBooks(result);
        }
        fetchApi();
    },[])

    const handleDelete = async (id)=> {
      const result=await bookService.deleteBook(id);
      const result1=await bookService.findAll();
      setBooks(result1);
    }
    useEffect(() => {
        const updatedBook = location.state?.updatedBook;
        if (updatedBook) {
            const updatedList = books.map((book) => {
                if (book.id === updatedBook.id) {
                    return updatedBook;
                }
                return book;
            });

            setBooks(updatedList);
        }
    }, [location.state?.updatedBook]);


    return(
    <>
        <NavLink to='create-book'>Create</NavLink>
        <table border={1}>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>quantity</th>
            </tr>
            </thead>
            <tbody>
            {
               books.map((book)=>(
                   <tr key={book.id}>
                       <td>{book.id}</td>
                       <td>{book.title}</td>
                       <td>{book.quantity}</td>
                       <td>
                           <button type="button" onClick={() => handleDelete(book.id)}>Xóa</button>
                           <button>
                               <NavLink to={'/update-book/'+book.id}>Update</NavLink>
                           </button>
                       </td>

                   </tr>
               ))


            }
            </tbody>

        </table>
        </>

)
}