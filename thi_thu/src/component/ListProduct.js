import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService";
import * as typeProductService from "../service/TypeProductService";
import {NavLink, useLocation} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function ListProduct() {
    const [products, setProduct] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
    // const location = useLocation();
    // const [nameDelete,setNameDelete]=useState(null)
    // const [idDelete,setIdDelete]=useState(null)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.findAll();
            setProduct(result)
        }
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApiType = async () => {
            const result1 = await typeProductService.findAll();
            setTypeProduct(result1)
        }
        fetchApiType();
    }, []);
    // useEffect(() => {
    //     const updateProduct = location.state?.updateProduct;
    //     if (updateProduct) {
    //         products.map((product => {
    //             if (product.id === updateProduct.id) {
    //                 return updateProduct;
    //             }
    //             return product
    //
    //         }))
    //         setProduct(updateProduct);
    //     }
    // }, [location.state?.updateProduct])

    // const handleDelete = async (id) => {
    //     await productService.deleteProduct(id)
    //     let result1 = await productService.findAll();
    //     setProduct(result1);
    // };

    // function deleteByName(id, name) {
    //     setIdDelete(id)
    //     setNameDelete(name)
    // }

    const handleDelete= async (id) =>{
      await productService.deleteProduct(id);
      let result=await productService.findAll();
      setProduct(result)
    };

    return (
        <>
            {/*<Formik*/}
            {/*    initialValues={{*/}
            {/*        name: "",*/}
            {/*    }}*/}
            {/*    onSubmit={(values) => {*/}
            {/*        const search = async () => {*/}
            {/*            let result = await productService.findByName(values.name)*/}
            {/*            setProduct(result)*/}
            {/*        }*/}
            {/*        search();*/}
            {/*    }}*/}
            {/*>*/}

            {/*    <Form>*/}
            {/*        <Field name="name" type="text"/>*/}
            {/*        <button type="submit">Search</button>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}

            {/*<NavLink to="/create-product">Create new product</NavLink>*/}

            <table border={1}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Cost</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products?.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.code}</td>
                        <td>{product.cost}</td>
                        {/*<td>{typeProduct.find(typeProduct=>typeProduct.id===product.typeProduct)?.nameType}</td>*/}
                        <td>{product.typeProduct.nameType}</td>
                        <td>{product.date}</td>
                        <td>
                            <button type="button" onClick={()=>handleDelete(product.id)}>delete</button>
                        </td>
                        {/*<td>*/}
                        {/*    /!*<button type="button" onClick={() => handleDelete(product.id)}>Delete</button>*!/*/}
                        {/*    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deleteByName(product.id,product.name)} >*/}
                        {/*        Delete*/}
                        {/*    </button>*/}

                        {/*    <button>*/}
                        {/*        <NavLink to={"/update-product/" + product.id}>Update</NavLink>*/}
                        {/*    </button>*/}
                        {/*</td>*/}
                    </tr>

                ))
                }
                </tbody>

                {/*<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"*/}
                {/*     aria-hidden="true">*/}
                {/*    <div className="modal-dialog">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>*/}
                {/*                <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                {/*                        aria-label="Close"></button>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body">*/}
                {/*                Bạn có muốn xóa <span style={{color:"red"}}>{nameDelete}</span>*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close*/}
                {/*                </button>*/}
                {/*                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(idDelete)} >Save changes</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </table>
        </>
    )
}
