import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"; 
import { API_URL } from "../config";
import useAdminMode from '../hooks/useAdminMode';
import axios from 'axios';

export const NewProduct = () => {
    const navigate = useNavigate();
    const { adminMode, isAdmin, toggleAdminMode } = useAdminMode();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    async function createNewProduct(e){
        e.preventDefault();
        try{
            const requestBody = {name, price, amount, category, description}
            const response = await axios.post(API_URL + "/c", requestBody)
            alert("Product added successfully")
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {

    }, [adminMode])

    if (adminMode  === "true" || isAdmin === "true"){
        return (
            <div className="page-main">
                <form>
                    <h2>Create new product:</h2>

                    <div className="form-input-box">
                        <label>Product Name</label>
                        <input onChange={e => {setName(e.target.value)}} type="text" className="form-control" id="name" placeholder="Name"/>
                    </div>
                    <div className="form-input-box">
                        <label>Product Price</label>
                        <input onChange={e => {setPrice(e.target.value)}} type="number" className="form-control" id="price" placeholder="Price"/>
                    </div>

                    <div className="form-input-box">
                        <label>Product Amount</label>
                        <input onChange={e => {setAmount(e.target.value)}} type="number" className="form-control" id="amount" placeholder="Amount in stock"/>
                    </div>
                    <div className="form-input-box-datalist">
                        <label>Product Category</label>
                        <input list="categories" onChange={e => {setCategory(e.target.value)}} className="form-control" id="category" placeholder="Category"/>
                        <datalist id="categories">
                            <option value="Toasters"/>
                            <option value="Computers"/>
                            <option value="Food"/>
                            <option value="Drinks"/>
                            <option value="Cars"/>
                            <option value="Balls"/>
                            <option value="Games"/>
                            <option value="Bowls"/>
                            <option value="Rugs"/>
                            <option value="Chairs"/>
                        </datalist>
                    </div>
                    <div className="form-input-box-description">
                        <label>Product Description</label>
                        <textarea onChange={e => {setDescription(e.target.value)}} type="text" className="form-control" id="description" placeholder="Description"/>
                    </div>

                    <button type="submit" className="form-button" onClick={createNewProduct}>Create Product</button>
                </form>
            </div>
    )}
    else{
        return (
        <h1>How did you even get here?<br></br>This is no place for mere mortals<br></br>(Only admins can access this page)</h1>
    )}
};