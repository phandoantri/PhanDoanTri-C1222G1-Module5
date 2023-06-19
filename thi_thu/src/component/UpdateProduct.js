// import React, {useEffect, useState} from "react";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup"
// import {useNavigate, useParams} from "react-router";
// import * as typeService from "../service/TypeProductService"
// import * as productService from "../service/ProductService"
//
// export function UpdateProduct() {
//     const [products, setProduct] = useState()
//     const [typeProduct, setTypeProduct] = useState([])
//     const param = useParams();
//     const navigate = useNavigate();
//     useEffect(() => {
//         const fectchType = async () => {
//             const result = await typeService.findAll();
//             setTypeProduct(result);
//         }
//         fectchType();
//     }, []);
//     useEffect(() => {
//         const getProductById = async () => {
//             const result = await productService.getProductById(param.id)
//             setProduct(result);
//         }
//         getProductById();
//     }, [param.id])
//     if (!products){
//         return null;
//     }
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     id: products?.id,
//                     name: products?.name,
//                     code: products?.code,
//                     cost: products.cost,
//                     type: products.type,
//                     date: products.date
//                 }}
//                 validationSchema={Yup.object({
//                     name: Yup.string().required("khong duoc de trong"),
//                     code: Yup.string().required("khong duoc de trong").matches(/^XP-\d{4}$/),
//                     cost: Yup.string().required("khong duoc de trong"),
//                     date: Yup.string().required("khong duoc de trong")
//                 })}
//                 onSubmit={(values) => {
//                     const updateProduct = async () => {
//                         const update = await productService.updateProduct(param.id, values)
//                         navigate("/product")
//                     }
//                     updateProduct();
//                 }}
//             >
//                 {
//                     <Form>
//                         <div>
//                             <div><label htmlFor="name">name</label></div>
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
//                             <Field as="select" name="type">{
//                                 typeProduct.map((typeProduct) => (
//                                     <option value={typeProduct.id}>{typeProduct.nameType}</option>
//                                 ))
//                             } </Field>
//                         </div>
//                         <div>
//                             <div><label htmlFor="date">Date</label></div>
//                             <div><Field name="date" id="date"/></div>
//                             <ErrorMessage name="date" component="span" className="err-message"/>
//                         </div>
//                         <button type="submit">Update</button>
//
//                     </Form>
//                 }
//
//             </Formik>
//         </>
//     )
// }