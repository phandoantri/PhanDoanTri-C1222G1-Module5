import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as bookService from "../service/BookService";
import {toast, ToastContainer} from "react-toastify";
import * as Yup from "yup";
import {FidgetSpinner} from "react-loader-spinner";

 export function UpdateBook() {
    const navigate = useNavigate();
    let param=useParams();
    const [updatedBook, setUpdatedBook] = useState();



     useEffect(()=>{
         const getBookById = async () =>{
             const result = await bookService.getById(param.id)
             setUpdatedBook(result)
         }
         getBookById()
     },[param.id]);

     if (!updatedBook) {
         return null;
     }

     return(
         <>
             <Formik
                 initialValues={{
                     id: updatedBook?.id,
                     title: updatedBook?.title,
                     quantity: updatedBook?.quantity
                 }}
                 onSubmit={(values) => {
                     const update=async ()=>{
                         console.log(values)
                         await bookService.updateBook(param.id,values)
                         toast(`${values.title} update Ok`)
                         navigate('/')
                     }
                     update();
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