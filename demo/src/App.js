import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ListBook} from "./component/ListBook";
import {CreateBook} from "./component/CreateBook";
import {UpdateBook} from "./component/UpdateBook";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<ListBook />} />
       <Route path='/create-book' element={<CreateBook />}/>
       <Route path='/update-book/:id' element={<UpdateBook />}/>
     </Routes>
     </>
  );
}

export default App;
