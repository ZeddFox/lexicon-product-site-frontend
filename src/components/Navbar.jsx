import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAdminMode from "../hooks/useAdminMode.js";
import logo from "../assets/react.png"

export const Navbar = () => {
    const { adminMode, isAdmin, toggleAdminMode } = useAdminMode();

    return (
    <nav className="navbar-main">
        <div className="navbar-left">
            <Link to="/">
                <span>
                    <img src={logo} height="50px" width="50px"/>
                </span>
            </Link>
        </div>

        {
            isAdmin === "true" ? 
            <div>{adminMode === "true" ? 
                <div>Admin Mode Active <button onClick={() => toggleAdminMode()}>Set to Normal Mode</button></div> : 
                <button onClick={() => toggleAdminMode()}>Set to Admin Mode</button> }</div>
            : <div></div>
        }

        <div className="navbar-right">
            <Link to="/">Home</Link>
            <Link to="/cart">Shopping Cart</Link>

            {
                sessionStorage.getItem("firstName") ?
                <div><Link to={"/profile/" + sessionStorage.getItem("userID")}>{sessionStorage.getItem("firstName")}</Link></div> :
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    </div>
            }
        </div>
    </nav>
    );
};