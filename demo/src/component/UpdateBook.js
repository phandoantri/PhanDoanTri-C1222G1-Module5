import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router";
import * as bookService from "../service/BookService"

export function UpdateBook() {
    const navigate = useNavigate();
    const [update, setUpdate] = useState();
    const param = useParams()
    useEffect(() => {
        const getBookById = async () => {
            const result = await bookService.getBookById(param.id)
            setUpdate(result)
        }
        getBookById()
    }, [param.id]);

    if (!update) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: update?.id,
                    title: update?.title,
                    quantity: update?.quantity
                }}
                onSubmit={(values) => {
                    const update = async () => {
                        await bookService.updateBook(param.id, values)
                        navigate('/')
                    }
                    update();
                }}
            >
                <Form>
                    <div>
                        <label>Title</label>
                        <Field name='title'/>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <Field name='quantity'/>
                    </div>
                    <button type='submit'>Update</button>
                </Form>
            </Formik>
        </>

    )
}