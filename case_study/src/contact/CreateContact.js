import React, { useState } from 'react';

 export function ContractForm () {
    const [contract, setContract] = useState({
        contractNumber: '',
        startDate: '',
        endDate: '',
        depositAmount: '',
        totalPayment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContract((prevContract) => ({
            ...prevContract,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic khi gửi hợp đồng lên server hoặc lưu vào cơ sở dữ liệu
        console.log(contract);
    };

    return (
        <div className="contract-form-container">
            <h2>Rental Contract</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Contract Number:
                    <input
                        type="text"
                        name="contractNumber"
                        value={contract.contractNumber}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Start Date:
                    <input
                        type="text"
                        name="startDate"
                        value={contract.startDate}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    End Date:
                    <input
                        type="text"
                        name="endDate"
                        value={contract.endDate}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Deposit Amount:
                    <input
                        type="text"
                        name="depositAmount"
                        value={contract.depositAmount}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Total Payment:
                    <input
                        type="text"
                        name="totalPayment"
                        value={contract.totalPayment}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
