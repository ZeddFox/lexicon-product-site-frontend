import '../styles/style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API_URL } from "../config";
import axios from "axios";
import thumbnail from "../assets/tempthumb.png"

var tempProdName = "Epic Product";
var imgWidth = "300px";
var imgHeight = "300px";
var tempProductID = 0;
var hasProducts = false;
var productList;

export const Main = () => {
    const navigate = useNavigate();
    async function getProducts() {
        const response = axios.get(API_URL + "/all")
        productList = response.data.products
        hasProducts = true;
        console.log(productList);
    }
    useEffect(() => {
        getProducts();
    }, [hasProducts])

    
    return (
        <div className="page-main">
            <div>{productList.map(product => (
                <div key={product.productID}>
                    <p className="product-name-main-page">{product.name}</p>
                    <img className="main-page-thumbnail" src={product.path} alt="no idea" width={imgWidth} height={imgHeight} onClick={() => navigate("/product/" + product.productID)}/>
                </div>
            ))}</div>

            <div className="all-products-page">
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 1"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 2"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
            </div>
        </div>
    );
};