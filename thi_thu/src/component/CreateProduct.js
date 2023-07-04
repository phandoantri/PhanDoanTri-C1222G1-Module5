import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as typeService from "../service/TypeProductService"
import * as productService from "../service/ProductService"
import {useNavigate} from "react-router";

export function CreateProduct() {
    const [typeProduct, setType] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchType = async () => {
            const result = await typeService.findAll()
            setType(result)
        }
        fetchType()
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    code: "",
                    cost: "",
                    date: "",
                    typeProduct: ""
                }}
                onSubmit={(values) => {
                    console.log(values)
                    const create = async () => {
                        await productService.createProduct(values)
                        navigate("/")
                    }
                    create()
                }}
            >
                {
                    <Form>

                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" id="name"/>
                            <ErrorMessage name="name" className="err-message" component="span"/>
                        </div>
                        <div>
                            <label htmlFor="code">Code</label>
                            <Field name="code" type="text" id="code"/>
                            <ErrorMessage name="code" className="err-message" component="span"/>
                        </div>
                        <div>
                            <label htmlFor="cost">Cost</label>
                            <Field name="cost" type="number" id="cost"/>
                            <ErrorMessage name="cost" className="err-message" component="span"/>
                        </div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <Field name="date" type="date" id="date"/>
                            <ErrorMessage name="date" className="err-message" component="span"/>
                        </div>
                        <div>
                            <label htmlFor="typeProduct">Type product</label>
                            <Field as="select" name="typeProduct" id="typeProduct">
                                <option value="">Select</option>
                                {
                                    typeProduct.map((type) => (
                                        <option value={type.id}>{type.nameType}</option>
                                    ))
                                }

                            </Field>
                            <ErrorMessage name="typeProduct" className="err-message" component="span"/>
                        </div>
                        <button type="submit">Create</button>

                    </Form>
                }

            </Formik>
        </>
    )
}