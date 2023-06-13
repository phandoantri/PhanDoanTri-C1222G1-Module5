import logo from './logo.svg';
import './App.css';
import React from "react";
import {NavLink} from "react-router-dom";

import {Route, Routes} from "react-router";
import UserList from "./components/listUser";

function App() {

    return (
        <>
            <UserList />
        </>
    );
}

export default App;
