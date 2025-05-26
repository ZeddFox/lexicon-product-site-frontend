import '../styles/style.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../config";
import axios from "axios";
import useAdminMode from '../hooks/useAdminMode';

export const Product = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    let { productID } = useParams();

    const getProduct = async () => {
        try {
            const response = await axios.get(API_URL + "/p?productID=" + productID);
            setProduct(response.data)
            console.log("Got product from backend")
        }
        catch (error) {
            console.error("Error getting products: ", error);
        }
    }

    useEffect(() => {
        if (productID){
            getProduct()
        }
    },[productID, adminMode])

    function adminFunctions(){
        if (sessionStorage.getItem("adminMode") == "true"){

            return (
                <div>DEBUG: Admin mode true</div>
            )
        }
    }
    
    if (product){
        return (
            <div className="page-main">
                {adminFunctions()}

                    <div>
                        <h1>{product.name}</h1>
                        <h2>{product.description}</h2>
                        <div>{(product.images || []).map(image => (
                            <div key={image.imageID}>
                                <img src={image.path} alt={image.altDescription}></img>
                            </div>
                        ))}</div>
                    </div>
                    <div className="product-status-box">
                        <h1>{product.price} kr</h1>
                        <h2>{product.amount} in stock</h2>
                        {
                            (product.amount < 1) ? 
                            <button className="add-to-cart-button">Out of stock</button> :
                            <button className="add-to-cart-button">Add to cart</button>
                        }
                    </div>
            </div>
        );
    }
    else{
        return (
            <div>No product found</div>
        )
    }
};