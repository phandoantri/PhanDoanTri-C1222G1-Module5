import logo from './logo.svg';
import './App.css';
import {BookList} from "./component/ListBook";
import React from "react";
import {Router, Routes} from "react-router-dom";
import {UpdateBook} from "./component/UpdatebBook";
import {Route} from "react-router";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<BookList />}/>
                <Route path='/update-book/:id' element={<UpdateBook />}/>
            </Routes>
        </>
    );
}

export default App;
