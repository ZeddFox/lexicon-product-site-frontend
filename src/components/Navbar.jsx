import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function toggleAdminMode(){
    if (sessionStorage.getItem("adminMode") == "true"){
        console.log("was: " + sessionStorage.getItem("adminMode"))
        sessionStorage.setItem("adminMode", "false")
        console.log("now: " + sessionStorage.getItem("adminMode"))
    }
    else{
        console.log("was: " + sessionStorage.getItem("adminMode"))
        sessionStorage.setItem("adminMode", "true")
        console.log("now: " + sessionStorage.getItem("adminMode"))
    }
}

export const Navbar = () => {

    return (
    <nav className="navbar-main">
        <div className="navbar-left">
            <Link to="/">
                <span>
                    Logo
                </span>
            </Link>
        </div>

        {
            sessionStorage.getItem("admin") ? 
            <div>{sessionStorage.getItem("adminMode") == "true" ? 
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