import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

export function ContractList ()  {
    const [contracts, setContracts] = useState([
        {
            id: 1,
            startDate: '2023-06-01',
            endDate: '2023-06-30',
            deposit: 1000,
            totalPayment: 5000,
        },
        {
            id: 2,
            startDate: '2023-07-01',
            endDate: '2023-07-31',
            deposit: 1500,
            totalPayment: 6000,
        },
        // Add more contracts here
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const contractsPerPage = 5;

    // Get current contracts
    const indexOfLastContract = currentPage * contractsPerPage;
    const indexOfFirstContract = indexOfLastContract - contractsPerPage;
    const currentContracts = contracts.slice(indexOfFirstContract, indexOfLastContract);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Số hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                </tr>
                </thead>
                <tbody>
                {currentContracts.map((contract) => (
                    <tr key={contract.id}>
                        <td>{contract.id}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{contract.deposit}</td>
                        <td>{contract.totalPayment}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {Array(Math.ceil(contracts.length / contractsPerPage))
                    .fill()
                    .map((_, index) => (
                        <Pagination.Item
                            key={index}
                            active={index + 1 === currentPage}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
            </Pagination>
        </div>
    );
};

