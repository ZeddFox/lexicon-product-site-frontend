import '../styles/style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API_URL } from "../config";
import axios from "axios";
import thumbnail from "../assets/tempthumb.png"

var imgWidth = "300px";
var imgHeight = "300px";

function ProductList(){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

   function gotoProductPage(IDOfProduct){
        sessionStorage.setItem("curProduct", IDOfProduct)
        navigate("/product/" + IDOfProduct)
   } 

    useEffect(() => {
        const getProducts = async () => {
            try {
                if (sessionStorage.getItem("adminMode") == "true"){
                    const response = await axios.get(API_URL + "/p/all/admin?password=" + "SuperSecretAdminPassword");
                    setProducts(response.data.products);
                }
                else{
                    const response = await axios.get(API_URL + "/p/all");
                    setProducts(response.data.products);
                }

            }
            catch (error) {
                console.error("Error getting products: ", error);
            }
        }

        getProducts();

    }, [])

    function adminFunctions(){
        if (sessionStorage.getItem("adminMode") == "true"){
            return (
                <button onClick={() => {navigate("/newproduct")}}>Add New Product</button>
            )
        }
    }

    return (
        <div className="all-products-page">{products.map(product => (
            <div key={product.productID} className="product-box">

                <p className="product-name-main-page">{product.name}</p>

                <img 
                className="main-page-thumbnail" 
                src={product.Images?.find(productImage => productImage.isThumbnail)?.path || thumbnail} 
                alt={product.Images?.find(productImage => productImage.isThumbnail)?.altDescription || "No thumbnail found"}
                width={imgWidth} 
                height={imgHeight} 
                onClick={() => gotoProductPage(product.productID)}/>

            </div>
        ))}
        <div>{adminFunctions()}</div>
        </div>
    )
};

export const Main = () => {
    
    return (
        <div className="page-main">

            {ProductList()}

        </div>
    );
};