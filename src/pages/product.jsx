import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from "../config";

var productID = 0;

export const Product = () => {
    const navigate = useNavigate();
    
    return (
        <div className="page-main">
            <div>Very temporary product page</div>

            <div className="product-status-box">
                <h1>1234 kr</h1>
                <h2>48 in stock</h2>
                <button className="add-to-cart-button">Add to cart</button>
            </div>
        </div>
    );
};