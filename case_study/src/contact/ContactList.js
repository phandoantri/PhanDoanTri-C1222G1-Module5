import React, {useEffect, useState} from 'react';
import {Table, Pagination} from 'react-bootstrap';
import * as contactService from '../service/ContactService'
import {NavLink, useLocation} from "react-router-dom";

export function ContractList() {
    const location = useLocation();
    const [contracts, setContracts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const contractsPerPage = 5;
    const indexOfLastContract = currentPage * contractsPerPage;
    const indexOfFirstContract = indexOfLastContract - contractsPerPage;
    const currentContracts = contracts.slice(indexOfFirstContract, indexOfLastContract);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await contactService.findAll();
            setContracts(result)
        }
        fetchApi();
    })

    const handleDelete = async (id) => {
        let result = await contactService.deleteContact(id);
        let result1 = await contactService.findAll();
        setContracts(result1)
    }
    useEffect(() => {
        const updateContact = location.state?.updateContact;
        if (updateContact) {
            const updateList = contracts.map((contact => {
                if (contact.id === updateContact.id) {
                    return updateContact;
                }
                return contact;
            }))
           setContracts(updateContact);
        }
    },[location.state?.updateContact])

    return (
        <>
            <NavLink to="/create-contact">Create new contact </NavLink>
            <h1 style={{textAlign: 'center'}}>Contact List</h1>
            <div className="container">
                <Table striped bordered hover border={1}>
                    <thead>
                    <tr>
                        <th>Số hợp đồng</th>
                        <th>Start Day</th>
                        <th>End Day</th>
                        <th>Deposit</th>
                        <th>Total Payment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contracts.map((contract) => (
                        <tr key={contract.id}>
                            <td>{contract.id}</td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.totalPayment}</td>
                            <td>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => handleDelete(contract.id)}>Delete
                                </button>
                                <button>
                                    <NavLink to={"/update-contact/"+contract.id}>Update</NavLink>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>

        </>

        // <div>
        //
        //     <Pagination>
        //         {Array(Math.ceil(contracts.length / contractsPerPage))
        //             .fill()
        //             .map((_, index) => (
        //                 <Pagination.Item
        //                     key={index}
        //                     active={index + 1 === currentPage}
        //                     onClick={() => paginate(index + 1)}
        //                 >
        //                     {index + 1}
        //                 </Pagination.Item>
        //             ))}
        //     </Pagination>
        // </div>
    );
};

