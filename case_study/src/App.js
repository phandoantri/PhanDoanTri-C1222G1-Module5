import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './Footer';
import {CustomerList} from "./customer/CustomerList";
import './index.css'
import {EditCustomer} from "./customer/UpdateCustomer";
import './css/UpdateCustomer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CreateCustomer.css'
import {CreateCustomer} from "./customer/CreateCustomer";
import {ContractList} from "./contact/ContactList";
import {ServiceList} from "./services/ListService";
import {CreateService} from "./services/CreateService";
import './css/CreateService.css'
import {Header} from "./Header";
import {Routes} from "react-router-dom";
import {Route} from "react-router";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                {/*<Route path="/service" element={<ServiceList />} />*/}
                <Route path="/create-customer" element={<CreateCustomer />} />
                <Route path="/customer" element={<CustomerList />} />

                {/*<CustomerList />*/}
                {/*<EditCustomer />*/}
                {/*<AddCustomer />*/}
                {/*<ContractList />*/}
                {/*<ServiceList />*/}
                {/*<CreateService />*/}

            </Routes>
            <Footer/>
        </>
    );
}

export default App;
