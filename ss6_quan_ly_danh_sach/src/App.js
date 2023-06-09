import logo from './logo.svg';
import './App.css';
import {BookList} from "./component/ListBook";
import React from "react";
import {Router, Routes,NavLink} from "react-router-dom";
import {UpdateBook} from "./component/UpdatebBook";

function App() {
  return (
      <>
          <NavLink to='/update-book' ></NavLink>
 <Routes>
     <Router path='/' element={<BookList />} />
<Router  path='/update-book/:id' element={<UpdateBook />}/>
 </Routes>
    </>


  );
}

export default App;
