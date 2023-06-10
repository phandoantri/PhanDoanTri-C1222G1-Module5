import React, {useEffect} from 'react';
import './css/Header.css';

export function Header  ()  {
    useEffect(() => {
        const header = document.querySelector('.header');

        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="header">
            <nav className="navbar">
                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" style={{width:'60px',height:"60px"}}  alt="Furama Resort" className="logo" />
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
                        <a href="./service.html">Dịch vụ</a>
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
