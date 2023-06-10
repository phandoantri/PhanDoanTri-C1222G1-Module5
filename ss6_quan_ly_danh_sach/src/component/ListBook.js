import React, { useEffect, useState } from "react";
import * as bookService from '../service/BookService'
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";


export function BookList() {
    const navigate = useNavigate();
    const location = useLocation();
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll();
            setBookList(result);
        }
        fetchApi();
    }, []);

    const handleDelete = (id) => {
        const updatedBookList = bookList.filter((book) => book.id !== id);
        setBookList(updatedBookList);
    };

    useEffect(() => {
        const updatedBook = location.state?.updatedBook;
        if (updatedBook) {
            const updatedList = bookList.map((book) => {
                if (book.id === updatedBook.id) {
                    return updatedBook;
                }
                return book;
            });

            setBookList(updatedList);
        }
    }, [location.state?.updatedBook]);

    const handleUpdate = (book) => {
        navigate(`/update-book/${book.id}`, { state: { book } });
    };

    return (
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
                    bookList.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button type="button" onClick={() => handleDelete(book.id)}>Xóa</button>
                                <button type="button" onClick={() => handleUpdate(book)}>Update</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}