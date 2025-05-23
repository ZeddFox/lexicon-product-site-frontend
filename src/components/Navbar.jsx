import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
            <div>{sessionStorage.getItem("activeAdmin") ? 
                <button onClick={sessionStorage.setItem("activeAdmin", true)}>Not Admin</button> : 
                <button onClick={sessionStorage.setItem("activeAdmin", false)}>Admin</button> }</div>
            : <div></div>
        }

        <div className="navbar-right">
            <Link to="/">Home</Link>
            <Link to="/cart">Shopping Cart</Link>

            {
                sessionStorage.getItem("firstName") !== null && sessionStorage.getItem("firstName") !== undefined ?
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