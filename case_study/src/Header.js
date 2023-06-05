import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" style={{width:'100px',height:"100px"}}  alt="Furama Resort" className="logo" />
                <div className="center-section">
                <ul className="nav-links">
                    <li>
                        <a href="/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/rooms">Các phòng</a>
                    </li>
                    <li>
                        <a href="/dining">Nhà hàng</a>
                    </li>
                    <li>
                        <a href="/services">Dịch vụ</a>
                    </li>
                    <li>
                        <a href="/contact">Liên hệ</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;