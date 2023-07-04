import logo from './logo.svg';
import './App.css';

import React from "react";


import {ListProduct} from "./component/ListProduct";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import {CreateProduct} from "./component/CreateProduct";


function App() {
    return (
<>
        <Routes>
            <Route path="/" element={<ListProduct/>}/>
            {/*<Route path="/create" element={<CreateProduct/>}/>*/}
        </Routes>

    </>
    );
}

export default App;
