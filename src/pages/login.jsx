import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"; 
import { API_BASE_URL } from "../config";
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();
        try{
            const requestBody = {email, password}
            const respone = axios.post(API_BASE_URL + "/login", requestBody)
            sessionStorage.setItem('admin', respone.isAdmin)
            navigate("/")
        }
        catch (error){
            console.log(error);
        }
    }
    
    return (
        <div className="page-main">
            <form>
                <h2>Login</h2>
                <div className="form-input-box">
                    <p>Email Address</p>
                    <input onChange={e => {setEmail(e.target.value)}} type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-input-box">
                    <p>Password</p>
                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="form-button">Login</button>
                <p style={{marginTop:"2vh"}}>Don't have an account? <Link to={'/register'}>Create an account</Link></p>

                <div>Admin account: <br></br>Email: admin@ad.min<br></br>Password: 12345</div>
            </form>
        </div>
    );
};