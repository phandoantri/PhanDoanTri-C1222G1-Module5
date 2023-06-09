import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

 export function UpdateBook () {
    const history = useHistory();
    const { id } = useParams();
    const [book, setBook] = useState({ id: '', title: '', quantity: '' });

    const handleSave = () => {
        // Thực hiện lưu thông tin đối tượng đã cập nhật
        // Ví dụ: gọi API để lưu thông tin vào cơ sở dữ liệu

        // Chuyển về trang ban đầu
        history.push('/');
    };

    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <h1>Update Book</h1>
            <form>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                />

                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={book.quantity}
                    onChange={handleChange}
                />

                <button type="button" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    );
};