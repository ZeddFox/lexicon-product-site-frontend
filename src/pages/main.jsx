import '../styles/style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API_URL } from "../config";
import axios from "axios";
import thumbnail from "../assets/tempthumb.png"

var tempProdName = "Epic Product";
var imgWidth = "300px";
var imgHeight = "300px";
var isFalse = true;

function ProductList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(API_URL + "/p/all");
                setProducts(response.data.products);
            }
            catch (error) {
                console.error("Error getting products: ", error);
            }
        }

        getProducts();

    }, [])

    return (
        <div className="all-products-page">{products.map(product => (
            <div key={product.productID} className="product-box">

                <p className="product-name-main-page">{product.name}</p>

                <img 
                className="main-page-thumbnail" 
                src={product.Images?.find(productImage => productImage.isThumbnail)?.path || thumbnail} 
                alt="no idea" 
                width={imgWidth} 
                height={imgHeight} 
                onClick={() => navigate("/product/" + product.productID)}/>

            </div>
        ))}</div>
    )
};

export const Main = () => {
    const navigate = useNavigate();
    
    return (
        <div className="page-main">

            {ProductList()}

            <div className="all-products-page">
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 1"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product/1")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 2"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product/2")}/>
                </div>
            </div>
        </div>
    );
};