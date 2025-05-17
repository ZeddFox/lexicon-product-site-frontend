import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from "../config";
import thumbnail from "../assets/tempthumb.png"

var tempProdName = "Epic Product";
var imgWidth = "300px";
var imgHeight = "300px";
var tempProductID = 0;

export const Main = () => {
    const navigate = useNavigate();
    
    return (
        <div className="page-main">

            <div className="all-products-page">
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 1"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 2"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 3"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 4"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 5"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
                <div className="product-box">
                    <div className="product-name-main-page">{tempProdName + " 6"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight} onClick={() => navigate("/product")}/>
                </div>
            </div>
        </div>
    );
};