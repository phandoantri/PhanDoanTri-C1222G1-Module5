import React from "react";
import {Field, Form, Formik} from "formik"
import * as bookService from "../service/BookService"
import {useNavigate} from "react-router";

export function CreateBook() {
    const navigate=useNavigate()

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    quantity: ''
                }}
                onSubmit={(values)=>{
                    const create= async ()=>{
                        await bookService.create(values)
                        console.log(values)
                        navigate('/')
                    }
                    create();
                }}
            >
                {

                    <Form>
                        <h1>Create book</h1>
                        <div>
                            <label >Title</label>
                            <Field type="text" name="title" />
                        </div>
                        <div>
                            <label>Quantity</label>
                            <Field type="number" name="quantity" />
                        </div>
                        <button type="submit">Create</button>
                    </Form>
                }
            </Formik>
        </>
    )

}