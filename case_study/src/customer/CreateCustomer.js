import React, {useState} from "react";

export function AddCustomer  ()  {
    const [customer, setCustomer] = useState({
        id: '',
        name: '',
        dayOfBirth: '',
        gender: '',
        cmndNumber: '',
        phoneNumber: '',
        email: '',
        typeCustomer: '',
        address: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Gửi dữ liệu khách hàng mới đi nơi bạn cần xử lý (API, Redux, ...)
        console.log(customer);
    };

    return (
        <div className="form-container">
            <h2>Add Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" name="id" value={customer.id} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" name="name" value={customer.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Day of Birth:
                    <input type="text" name="dayOfBirth" value={customer.dayOfBirth} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Gender:
                    <input type="text" name="gender" value={customer.gender} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    CMND Number:
                    <input type="text" name="cmndNumber" value={customer.cmndNumber} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={customer.phoneNumber} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={customer.email} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Type Customer:
                    <select name="typeCustomer" value={customer.typeCustomer} onChange={handleInputChange}>
                        <option value="Diamond">Diamond</option>
                        <option value="Platinium">Platinium</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Member">Member</option>
                    </select>
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={customer.address} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};