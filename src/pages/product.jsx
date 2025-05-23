import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_URL } from "../config";
import axios from "axios";

export const Product = ({ match }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        try {
            const response = await axios.get(API_URL + "/p?productID=" + match.params.id);
            setProduct(response.data)
        }
        catch (error) {
            console.error("Error getting products: ", error);
        }
    }
    
    if (product){
        return (
            <div>No product found</div>
        )
    }
    else{
        return (
            <div className="page-main">
                <div>Very temporary product page</div>
    
                    <div>{product.map(prod => (
    
                    <div key={prod.productID}>
                        <h1 className="product-name-main-page">{prod.name}</h1>
                        <h2>{prod.amount} in stock</h2>
                        <button className="add-to-cart-button">Add to cart</button>
                    </div>
    
            ))}</div>
    
                <div className="product-status-box">
                    <h1>1234 kr</h1>
                    <h2>48 in stock</h2>
                    <button className="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        );
    }
};