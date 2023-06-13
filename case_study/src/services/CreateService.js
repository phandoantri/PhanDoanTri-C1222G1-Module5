import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast,ToastContainer} from "react-toastify";
import * as Yup from "yup"
import {FidgetSpinner} from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';

export function CreateService() {
    return (
        <>
            <Formik
                initialValues={{
                    id: '',
                    nameService: '',
                    serviceArea: '',
                    serviceCost: '',
                    maxGuest: '',
                    rentType: ''
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                        toast(`${values.nameService} create OK`)

                    })
                }}
                validationSchema={Yup.object({
                    serviceArea: Yup.string().required('Không đưuọc để trống'),
                    serviceCost: Yup.string().required('Không được để trống'),
                    maxGuest: Yup.string().required('Không đưuọc để trống')
                })}
            >

                {
                    ({isSubmitting}) => (
                        <div className="container">
                            <div className="form-container">
                                <h1 style={{textAlign:"center"}}>Form Create Service</h1>
                                <Form>
                                    <div className='mb-3'>
                                        <label htmlFor='nameService'>Type service </label>
                                        <Field as='select' name='nameService' id='nameService'>
                                            <option value='Villa'>Villa</option>
                                            <option value='Room'>Room</option>
                                            <option value='House'>House</option>
                                        </Field>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='serviceArea'>Diện tích sử dụng </label>
                                        <Field type='number' name="serviceArea" id='serviceArea'/>
                                        <ErrorMessage name='serviceArea' component='span' className='err-message'/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='serviceCost'>Chi phí thuê </label>
                                        <Field type='text' name="serviceCost" id='serviceCost'/>
                                        <ErrorMessage name='serviceCost' component='span' className='err-message'/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='message'>Số người tối đa </label>
                                        <Field type='number' name="maxGuest" id='message'/>
                                        <ErrorMessage name='maxGuest' component='span' className='err-message'/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='rentType'>Type service </label>
                                        <Field as='select' name='rentType' id='rentType'>
                                            <option value='Year'>Năm</option>
                                            <option value='Month'>Tháng</option>
                                            <option value='Day'>Ngày</option>
                                            <option value='Giờ'>Giờ</option>
                                        </Field>
                                    </div>
                                    {isSubmitting ?
                                        <FidgetSpinner
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="dna-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="dna-wrapper"
                                            ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                            backgroundColor="#F4442E"
                                        /> : <button type='submit'>Submit</button>
                                    }
                                </Form>
                            </div>
                            <div className="image-container"></div>
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