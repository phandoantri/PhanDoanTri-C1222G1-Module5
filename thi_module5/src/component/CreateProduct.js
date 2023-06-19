import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as typeProductService from "../service/TypeProductService";
import * as productService from "../service/ProductService"
import {useNavigate} from "react-router";

export function CreateProduct() {
    const [typeProduct,setTypeProduct]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchApiType=async ()=>{
            let result=await typeProductService.findAll();
            setTypeProduct(result)
        }
        fetchApiType()
    },[])
    return(
        <Formik
        initialValues={{
            name: "",
            code: "",
            moTa: "",
            typeProduct: "",
            cost: 0,
            quantity: 0,
            date:""
        }}
        validationSchema={Yup.object({
            name: Yup.string().required("Không được để trống"),
            code: Yup.string().required("Không được để trống").matches(/^PROD-\d{4}$/),
            moTa: Yup.string().required("Không được để trống"),
            typeProduct: Yup.string().required("Không được để trống"),
            cost: Yup.number().required("Không được để trống"),
            quantity: Yup.number().required("Không được để trống"),
            date:Yup.string().required("Không được để trống")
        })}
        onSubmit={(values)=>{
            let create=async ()=>{
                await productService.createProduct(values)
                navigate("/product")

            }
            create();
        }}

        >
            {
                <div className="container">
                <Form>
                    <div>
                        <div><label htmlFor="name">Name</label></div>
                        <div><Field name="name" type="text" id="name"/></div>
                        <ErrorMessage name="name" component="span" className="err-message"/>
                    </div>
                    <div>
                        <div><label htmlFor="code">Code</label></div>
                        <div><Field name="code" type="text" id="code"/></div>
                        <ErrorMessage name="code" component="span" className="err-message"/>
                    </div>
                    <div>
                        <div><label htmlFor="moTa">Mo ta</label></div>
                        <div><Field name="moTa" type="text" id="moTa"/></div>
                        <ErrorMessage name="moTa" component="span" className="err-message"/>
                    </div>
                    <div>
                        <div><label htmlFor="moTa">Type Product</label></div>
                        <div>
                            <Field as="select" name="typeProduct">
                                {
                                    typeProduct.map((typeProduct)=>(
                                        <option value={typeProduct.id}>{typeProduct.nameType}</option>
                                    ))
                                }
                            </Field>
                        </div>
                        <ErrorMessage name="typeProduct" component="span" className="err-message"/>
                    </div>
                    <div>
                        <div><label htmlFor="cost">Cost</label></div>
                        <div><Field name="cost" type="number" id="cost"/></div>
                        <ErrorMessage name="cost" component="span" className="err-message"/>
                    </div>
                    <div>
                        <div><label htmlFor="quantity">Quantity</label></div>
                        <div><Field name="quantity" type="number" id="quantity"/></div>
                        <ErrorMessage name="quantity" component="span" className="err-message"/>
                    </div>
                    <div>
                        <div><label htmlFor="date">Date</label></div>
                        <div><Field name="date" type="date" id="date"/></div>
                        <ErrorMessage name="date" component="span" className="err-message"/>
                    </div>
                    <button type="submit">Add</button>
                </Form>
                </div>
            }
        </Formik>
    )

}