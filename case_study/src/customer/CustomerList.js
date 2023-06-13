import React, {useEffect, useState} from "react";
import * as customerService from "../service/CustomerService"
import {NavLink} from "react-router-dom";


export function CustomerList() {
    const [customerList, setCustomerList] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAll();
            setCustomerList(result);
        }
        fetchApi();
    }, [])


    const deleteCustomer = async (id) => {
        const result = await customerService.deleteCustomer(id);
        const result1 = await customerService.findAll();
        setCustomerList(result1)
    }

    return (

        <>
            <NavLink to='/create-customer'>Create new customer</NavLink>
            <h1 style={{textAlign: 'center'}}>CUSTOMER LIST</h1>
            <div className="container">
                <table border={1}>
                    <tbody>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Day Of Birth</th>
                        <th>Gender</th>
                        <th>CMND</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    {customerList.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.dayOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.CMND}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.typeCustomer}</td>
                            <td>{customer.address}</td>
                            <td>
                                {/*    <button onClick={() => editCustomer(customer.id)}>Sửa</button>*/}
                                <button onClick={() => deleteCustomer(customer.id)}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

