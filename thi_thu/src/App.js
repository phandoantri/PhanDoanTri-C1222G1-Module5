import logo from './logo.svg';
import './App.css';

import React from "react";


import {ListProduct} from "./component/ListProduct";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import {CreateProduct} from "./component/CreateProduct";
import {UpdateProduct} from "./component/UpdateProduct";

function App() {
    return (
<>
        {/*<Routes>*/}
        {/*    <Route path="/product" element={<ListProduct/>}/>*/}
        {/*    <Route path="/create-product" element={<CreateProduct/>}/>*/}
        {/*    <Route path="/update-product/:id" element={<UpdateProduct />}/>*/}
        {/*</Routes>*/}
        <ListProduct/>
    </>
    );
}

export default App;
