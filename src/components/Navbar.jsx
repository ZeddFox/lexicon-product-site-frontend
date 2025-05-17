import React from "react";
import { Link } from "react-router-dom";
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

        <div className="navbar-right">
            <Link to="/">
                Home
            </Link>
            <Link to="/login">
                Login
            </Link>
            <Link to="/register">
                Register
            </Link>
            <Link to="/cart">
                Shopping Cart
            </Link>
        </div>
    </nav>
    );
};