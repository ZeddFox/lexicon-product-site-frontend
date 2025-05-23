import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"; 
import { API_URL } from "../config";
import axios from 'axios';

export const Profile = () => {
    const navigate = useNavigate();
    
    function Logout(){
        sessionStorage.clear();
        console.log("Logged out")
        navigate("/")
    }

    return (
        <div className="page-main">
            <div>Profile page</div>
            <button onClick={Logout}>Log out</button>
        </div>
    );
};