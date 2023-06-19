import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as contactService from "../service/ContactService"

export function CreateContact() {
    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{
                    startDate: "",
                    endDate: "",
                    deposit: "",
                    totalPayment: ""
                }}
                onSubmit={(values) => {
                    const create = async () => {
                        await contactService.createContact(values)
                        console.log(values)
                        navigate("/contact")
                    }
                    create();
                }}
                validationSchema={Yup.object({
                    startDate: Yup.string().required("must not be left blank"),
                    endDate: Yup.string().required("must not be left blank"),
                    deposit: Yup.number().required("must not be left blank"),
                    totalPayment: Yup.number().required("must not be left blank")
                })}
            >
                {

                    <div className="contract-form-container">
                        <h1 style={{textAlign:"center"}}>Create Contract</h1>
                        <div className="container">

                            <Form>
                                <div>
                                    <div><label>Start Day:</label></div>
                                    <div style={{width:"366px"}}> <Field type="date" name="startDate" /></div>
                                    <ErrorMessage name='startDate' component='span' className='err-message'/>
                                </div>
                                <div>
                                    <div><label>End Day:</label></div>
                                    <div><Field type="date" name="endDate"/></div>
                                    <ErrorMessage name='endDate' component='span' className='err-message'/>
                                </div>
                                <div>
                                    <div><label>Deposit:</label></div>
                                    <div><Field type="number" name="deposit"/></div>
                                    <ErrorMessage name='deposit' component='span' className='err-message'/>
                                </div>
                                <div>
                                    <div><label>Total Payment:</label></div>
                                    <div><Field type="number" name="totalPayment"/></div>
                                    <ErrorMessage name='totalPayment' component='span' className='err-message'/>
                                </div>

                                <button type="submit">Submit</button>
                            </Form>
                        </div>

                    </div>
                }
            </Formik>

        </>

    );
};
