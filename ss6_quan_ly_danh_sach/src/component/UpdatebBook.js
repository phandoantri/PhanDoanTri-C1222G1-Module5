import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export function UpdateBook() {
    const location = useLocation();
    const { book } = location.state || {};
    const [title, setTitle] = useState(book.title);
    const [quantity, setQuantity] = useState(book.quantity);
    const navigate = useNavigate();

    const handleUpdate = () => {
        const updatedBook = { id: book.id, title, quantity };
        navigate('/', { state: { updatedBook } });
    };

    useEffect(() => {
        if (location.state?.updatedBook) {
            const { title, quantity } = location.state.updatedBook;
            setTitle(title);
            setQuantity(quantity);
        }
    }, [location.state?.updatedBook]);

    return (
        <>
            <h1>Update Book</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="button" onClick={handleUpdate}>
                Update
            </button>
        </>
    );
}