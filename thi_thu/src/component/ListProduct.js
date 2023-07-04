import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService";
import * as typeProductService from "../service/TypeProductService";
import {NavLink} from "react-router-dom";


export function ListProduct() {
    const [products, setProduct] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
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

    const handleDelete = async (id) => {
        await productService.deleteProduct(id);
        let result = await productService.findAll();
        setProduct(result)
    };

    return (
        <>
            <NavLink to="/create">Create new product</NavLink>

            <table className="table table-striped">
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
                        <td>{product.typeProduct.nameType}</td>
                        <td>{product.date}</td>
                        <td>
                            <button type="button" onClick={() => handleDelete(product.id)}>delete</button>
                        </td>

                    </tr>

                ))
                }
                </tbody>

            </table>
        </>
    )
}
