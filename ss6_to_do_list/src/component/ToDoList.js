import React, {useEffect, useState} from "react";
import * as toDoService from '../service/ToDoListService';
import {Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import { FidgetSpinner } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';


export function ToDoList() {
    const [toDo, setTodo] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await toDoService.findAll()
            setTodo(result)
        }

        fetchApi()

    }, [])

    return (
        <>
            <h1>TO DO LIST</h1>
            <Formik
            initialValues={{
                id:'',
                title:''
            }}
            onSubmit={(values,{setSubmitting})=>{
                const create=async ()=>{
                    await toDoService.save(values)
                    console.log(values)
                    setSubmitting(false)
                    toast(`${values.title} create OK`)
                }
                create();

            }}
            >


                {
                    ({isSubmitting})=>(
                        <Form>
                            <div className='mb-3'>
                                <Field type='text' name="title" id='title'/>
                                { isSubmitting ?
                                    <FidgetSpinner
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"
                                        ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                        backgroundColor="#F4442E"
                                    />: <button type='submit'>Submit</button>
                                }
                            </div>
                        </Form>
                    )

                }
            </Formik>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {
                toDo.map((item) => (
                    <ul key={item.id}>
                        <li>{item.title}</li>
                    </ul>

                ))
            }


        </>
    )
}