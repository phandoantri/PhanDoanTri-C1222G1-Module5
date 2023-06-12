import logo from './logo.svg';
import './App.css';
import {BookList} from "./component/ListBook";
import React from "react";
import {Routes} from "react-router-dom";
import {UpdateBook} from "./component/UpdatebBook";
import {Route} from "react-router";
import {CreateBook} from "./component/CreateBook";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<BookList />}/>
                <Route path='/update-book/:id' element={<UpdateBook />}/>
                <Route path={'create-book'} element={<CreateBook />}/>
            </Routes>
        </>
    );
}

export default App;
