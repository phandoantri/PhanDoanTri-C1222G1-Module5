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
import {AddCustomer} from "./customer/CreateCustomer";
import {ContractList} from "./contact/ContactList";
import {ServiceList} from "./service/ListService";
import {CreateService} from "./service/CreateService";
import './css/CreateService.css'
import {Header} from "./Header";


function App() {
    return (
        <>
           <Header />
            {/*<CustomerList />*/}
            {/*<EditCustomer />*/}
            {/*<AddCustomer />*/}
            {/*<ContractList />*/}
            {/*<ServiceList />*/}
            <CreateService />
            <Footer/>
        </>
    );
}

export default App;
