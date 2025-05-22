import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_URL } from "../config";

export const Cart = () => {
    const navigate = useNavigate();
    
    return (
        <div className="page-main">
            <div>Cart page</div>
        </div>
    );
};