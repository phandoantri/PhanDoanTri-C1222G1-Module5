// import React, {useEffect, useState} from "react";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup"
// import * as productService from "../service/ProductService"
// import * as typeProductService from "../service/TypeProductService"
// import {useNavigate} from "react-router";
//
// export function CreateProduct() {
//     const [typeProducts, setTypeProduct] = useState([])
//     const navigate = useNavigate();
//     useEffect(() => {
//         const fetchApi = async () => {
//             let result = await typeProductService.findAll();
//             setTypeProduct(result)
//         }
//         fetchApi();
//     }, [])
//     return (
//         <Formik
//             initialValues={{
//                 name: "",
//                 code: "",
//                 cost: "",
//                 type: "",
//                 date: ""
//             }}
//             validationSchema={Yup.object({
//                 name: Yup.string().required("Khong duoc trong"),
//                 code: Yup.string().required("khong duoc de trong").matches(/^XP-\d{4}$/),
//                 cost: Yup.string().required("Khong duoc trong"),
//                 date: Yup.string().required("Khong duoc trong")
//             })}
//             onSubmit={(values) => {
//                 const create = async () => {
//                     const resultt = await productService.createProduct(values);
//                     console.log(values)
//                     navigate("/product")
//
//                 }
//                 create();
//             }}
//         >
//             {
//                 <div className="container">
//                     <Form>
//                         <h1>Create Product</h1>
//                         <div>
//                             <div><label htmlFor="name">Name</label></div>
//                             <div><Field name="name" id="name"/></div>
//                             <ErrorMessage name="name" component="span" className="err-message"/>
//                         </div>
//                         <div>
//                             <div><label htmlFor="code">Code</label></div>
//                             <div><Field name="code" id="code"/></div>
//                             <ErrorMessage name="code" component="span" className="err-message"/>
//                         </div>
//                         <div>
//                             <div><label htmlFor="cost">Cost</label></div>
//                             <div><Field name="cost" id="cost"/></div>
//                             <ErrorMessage name="cost" component="span" className="err-message"/>
//                         </div>
//                         <div>
//                             <div><label>Type Product</label></div>
//                             <Field as="select" name="type">
//                                 {
//                                 typeProducts.map((typeProduct) => (
//                                     <option value={typeProduct.id}>{typeProduct.nameType}</option>
//                                 ))
//                             } </Field>
//
//                         </div>
//                         <div>
//                             <div><label htmlFor="date">Date</label></div>
//                             <div><Field type="date" name="date" id="date"/></div>
//                             <ErrorMessage name="date" component="span" className="err-message"/>
//                         </div>
//                         <button type="submit">Create</button>
//                     </Form>
//                 </div>
//             }
//
//         </Formik>
//
//
//     )
// }