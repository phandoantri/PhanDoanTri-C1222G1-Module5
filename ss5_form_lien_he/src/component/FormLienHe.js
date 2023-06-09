import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FidgetSpinner } from  'react-loader-spinner'


export function FormLienHe() {

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                        toast(`${values.name} create OK`)

                    }, 2000)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Không đưuọc để trống'),
                    email: Yup.string().required('Không được để trống').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                    phone: Yup.string().required('Không đưuọc để trống'),
                    message: Yup.string().required('Không đưuọc để trống')
                })}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container">
                            <h1>Form Contact</h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor='form'>Name </label>
                                    <Field type='text' name="name" id='form'/>
                                </div>
                                <ErrorMessage name='name' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <label htmlFor='email'>Email </label>
                                    <Field type='text' name="email" id='email'/>
                                </div>
                                <ErrorMessage name='email' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <label htmlFor='phone'>Phone </label>
                                    <Field type='text' name="phone" id='phone'/>
                                </div>
                                <ErrorMessage name='phone' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <label htmlFor='message'>Message </label>
                                    <Field as="textarea" name="message" id='message'/>
                                </div>
                                <ErrorMessage name='message' component='span' className='err-message'/>
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
