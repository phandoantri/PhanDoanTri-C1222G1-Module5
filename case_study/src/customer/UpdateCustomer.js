import React, {useState} from "react";


// import './css/UpdateCustomer.css'

export function EditCustomer() {
    const [customer, setCustomer] = useState({
        id: 1,
        name: 'Nguyen Van A',
        dayOfBirth: '03-06-1996',
        gender: 'Nam',
        CMND: '23452123',
        phoneNumber: '0123456789',
        email: 'abc@gmail.com',
        typeCustomer: 'Diamond',
        address: 'Đà Nẵng'
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCustomer(prevCustomer => ({...prevCustomer, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lưu thông tin khách hàng
        console.log(customer);
    };

    return (
        <>
            <h2 style={{textAlign: 'center'}}>Sửa thông tin khách hàng</h2>
            <div className="container">
                <div className="image-container">
                    <img src="https://studiochupanhdep.com/Upload/Images/Album/studio-chup-anh-doanh-nhan-05.jpg"
                         alt="Customer"/>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Họ tên:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={customer.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dayOfBirth">Ngày sinh:</label>
                            <input
                                type="text"
                                id="dayOfBirth"
                                name="dayOfBirth"
                                value={customer.dayOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dayOfBirth">Giới tính:</label>
                            <input
                                type="text"
                                id="dayOfBirth"
                                name="dayOfBirth"
                                value={customer.gender}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dayOfBirth">CMND:</label>
                            <input
                                type="text"
                                id="dayOfBirth"
                                name="dayOfBirth"
                                value={customer.CMND}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dayOfBirth">Phone number:</label>
                            <input
                                type="text"
                                id="dayOfBirth"
                                name="dayOfBirth"
                                value={customer.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dayOfBirth">email:</label>
                            <input
                                type="text"
                                id="dayOfBirth"
                                name="dayOfBirth"
                                value={customer.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="typeCustomer">Loại khách:</label>
                            <select
                                id="typeCustomer"
                                name="typeCustomer"
                                value={customer.typeCustomer}
                                onChange={handleChange}
                            >
                                <option value="Diamond">Diamond</option>
                                <option value="Platinium">Platinium</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Member">Member</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dayOfBirth">Địa chỉ:</label>
                            <input
                                type="text"
                                id="dayOfBirth"
                                name="dayOfBirth"
                                value={customer.address}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Lưu</button>
                    </form>
                </div>
            </div>
        </>
    );
};

