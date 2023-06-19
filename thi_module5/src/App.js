import logo from './logo.svg';
import './App.css';
import {Routes} from "react-router-dom";
import React from "react";
import {Route} from "react-router";
import {ListProduct} from "./component/ListProduct";
import {CreateProduct} from "./component/CreateProduct";


function App() {
  return (
   <>
<Routes>
    <Route path="/product" element={<ListProduct/>}/>
    <Route path="/create-product" element={<CreateProduct />}/>
</Routes>
     </>
  );
}

export default App;
