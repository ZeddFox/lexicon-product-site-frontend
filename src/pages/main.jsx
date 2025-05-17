import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from "../config";
import thumbnail from "../assets/tempthumb.png"

var tempProdName = "Epic Product";
var imgWidth = "300px";
var imgHeight = "300px";

export const Main = () => {
    const navigate = useNavigate();
    
    return (
        <div className="page-main">
            <div className="small-shopping-cart">
                <div>Shopping cart placeholder</div>
            </div>

            <div className="all-products-page">
                <div>
                    <div>{tempProdName + " 1"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight}></img>
                </div>
                <div>
                    <div>{tempProdName + " 2"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight}></img>
                </div>
                <div>
                    <div>{tempProdName + " 3"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight}></img>
                </div>
                <div>
                    <div>{tempProdName + " 4"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight}></img>
                </div>
                <div>
                    <div>{tempProdName + " 5"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight}></img>
                </div>
                <div>
                    <div>{tempProdName + " 6"}</div>
                    <img className="main-page-thumbnail" src={thumbnail} alt="temp picture" width={imgWidth} height={imgHeight}></img>
                </div>
            </div>
        </div>
    );
}