import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService"
import * as typeProductService from "../service/TypeProductService"
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function ListProduct() {
    const [product,setProduct]=useState([])
    const [typeProduct,setTypeProduct]=useState([])
    useEffect(()=>{
        const fetchApi=async ()=>{
            let result=await productService.findAll();
            setProduct(result)
        }
        fetchApi();
    },[]);
    useEffect(()=>{
        const fetchApiType=async ()=>{
            let result=await typeProductService.findAll();
            setTypeProduct(result)
        }
        fetchApiType()
    },[])
    return(
        <>
            <Formik
            initialValues={{
                name:""
            }}
            onSubmit={(values)=>{
                const search=async ()=>{
                    let result=await productService.findByName(values.name)
                    setProduct(result)
                }
                search();
            }}
            >
                <Form>
                    <Field name="name"/>
                    <button type="submit">Search</button>
                </Form>

            </Formik>
            <NavLink to="/create-product">Create new product</NavLink>
            <table border={1}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    product.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{typeProduct.find(typeProduct=>typeProduct.id===product.typeProduct)?.nameType}</td>
                            <td>{product.quantity}</td>
                            <td>{product.cost}</td>
                            <td>{product.date}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </>


    )

}