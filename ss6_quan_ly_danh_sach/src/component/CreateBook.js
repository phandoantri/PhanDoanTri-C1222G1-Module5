import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {toast, ToastContainer} from "react-toastify";
import { FidgetSpinner } from 'react-loader-spinner'
import * as bookService from '../service/BookService'
import {useNavigate} from "react-router";
import 'react-toastify/dist/ReactToastify.css';
    export function CreateBook() {
    const navigate=useNavigate();
    return(
        <>
            <Formik
                initialValues={{
                    title: '',
                    quantity:''
                }}
                onSubmit={(values, {setSubmitting}) => {
                   const create=async ()=>{
                       await bookService.create(values)
                       setSubmitting(false)
                       console.log(values)
                       toast(`${values.title} create Ok`)
                       navigate('/')
                   }
                   create();
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required('Không đưuọc để trống'),
                    quantity: Yup.number().required('Không đưuọc để trống'),
                })}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container">
                            <h1>Create book</h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor='title'>Title </label>
                                    <Field type='text' name="title" id='title'/>
                                </div>
                                <ErrorMessage name='name' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <label htmlFor='quantity'>Quantity </label>
                                    <Field type='number' name="quantity" id='quantity'/>
                                </div>
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
                            </Form>
                        </div>
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
            </>
    )

}