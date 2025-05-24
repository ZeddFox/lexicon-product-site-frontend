import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"; 
import { API_URL } from "../config";
import axios from 'axios';

export const NewProduct = () => {
    const navigate = useNavigate();
    
    if (sessionStorage.getItem("adminMode")  == "true" || sessionStorage.getItem("admin") == "true"){
        return (
            <div className="page-main">
                <div>New Product Page</div>
            </div>
    )}
    else{
        return (
        <h1>How did you even get here?<br></br>This is no place for mere mortals<br></br>(Only admins can access this page)</h1>
    )}
};