import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as contactService from "../service/ContactService"

export function UpdateContact() {
    const param = useParams();
    const [updateContact,setUpdateContact]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const getBookById= async()=>{
            const result=await contactService.getContactById(param.id)
            setUpdateContact(result)
        }
        getBookById();
    },[param.id]);


    if (!updateContact){
        return null;
    }

    return(
        <>
          <Formik
          initialValues={{
              id:updateContact?.id,
              startDate:updateContact?.startDate,
              endDate: updateContact?.endDate,
              deposit: updateContact?.deposit,
              totalPayment:updateContact?.totalPayment
          }}
          validationSchema={Yup.object({
              startDate:Yup.string().required("must not be left blank"),
              endDate:Yup.string().required("must not be left blank"),
              deposit:Yup.number().required("must not be left blank"),
              totalPayment:Yup.number().required("must not be left blank")
          })}
          onSubmit={(values)=>{
              const update=async ()=>{
                  await contactService.updateContact(param.id,values)
                  navigate("/contact")
              }
              update();
          }}
          >
              {
                  <div className="contract-form-container">
                      <h1 style={{textAlign:"center"}}>Update Contact</h1>
                  <div className="container" >

                  <Form>
                          <div>
                              <div><label style={{width:'366px'}} htmlFor="startDate">Start Day</label></div>
                              <div><Field type="text" name="startDate" id="startDate"/></div>
                              <ErrorMessage name="startDate" component="span" className="err-message"/>
                          </div>
                          <div>
                              <div><label htmlFor="endDate">Start Day</label></div>
                              <div><Field type="text" name="endDate" id="endDate" /></div>
                              <ErrorMessage name="endDate" component="span" className="err-message"/>
                          </div>
                          <div>
                              <div><label htmlFor="deposit">Start Day</label></div>
                              <div><Field type="number" name="deposit" id="deposit" /></div>
                              <ErrorMessage name="deposit" component="span" className="err-message"/>
                          </div>
                          <div>
                              <div><label htmlFor="totalPayment">Start Day</label></div>
                              <div><Field type="number" name="totalPayment" id="totalPayment" /></div>
                              <ErrorMessage name="totalPayment" component="span" className="err-message"/>
                          </div>
                          <button type="submit">Update</button>
                  </Form>
                  </div>
                  </div>
              }
          </Formik>
            </>
    )
}