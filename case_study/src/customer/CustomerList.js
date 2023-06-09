import React, { useState } from "react";



export function CustomerList  ()  {
    const [customerList, setCustomerList] = useState([
        {
            id: 1,
            name: 'Nguyen Van A',
            dayOfBirth: '03-06-1996',
            gender: 'Nam',
            CMND: '23452123',
            phoneNumber: '0123456789',
            email: 'abc@gmail.com',
            typeCustomer: 'Diamond',
            address: 'Đà Nẵng'
        },
        {
            id: 2,
            name: 'Nguyen Van B',
            dayOfBirth: '04-10-2000',
            gender: 'Nữ',
            CMND: '13452123',
            phoneNumber: '0123456798',
            email: 'B@gmail.com',
            typeCustomer: 'Silver',
            address: 'Huế'
        }
    ]);

    const deleteCustomer = (customerId) => {
        setCustomerList(prevCustomerList =>
            prevCustomerList.filter(customer => customer.id !== customerId)
        );
    };

    const editCustomer = (customerId, newCustomer) => {
        setCustomerList(prevCustomerList =>
            prevCustomerList.map(customer => {
                if (customer.id === customerId) {
                    return { ...customer, ...newCustomer };
                }
                return customer;
            })
        );
    };

    return (
        <>
            <h1 style={{textAlign:'center'}}>CUSTOMER LIST</h1>
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
                            <button onClick={() => editCustomer(customer.id)}>Sửa</button>
                            <button onClick={() => deleteCustomer(customer.id)}>Xoá</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

