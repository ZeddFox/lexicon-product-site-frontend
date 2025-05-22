import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const Navbar = () => {
    let user;
    var activeUser;
    useEffect(() => {
        user = sessionStorage.getItem("user")
        if (user != null){
            activeUser = true;
        }
        else{
            activeUser = false;
        }
    }, [user]);

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
            <Link to="/">
                Home
            </Link>
            {
                activeUser ? <div>{user.FirstName}</div> :
                <div>
            <Link to="/login">
                Login
            </Link>
            <Link to="/register">
                Register
            </Link>
            </div>

}
            <Link to="/cart">
                Shopping Cart
            </Link>
        </div>
    </nav>
    );
};