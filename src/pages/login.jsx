import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"; 
import { API_URL } from "../config";
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();
        console.log("Try log in")
        try{
            const requestBody = {email, password}
            const response = await axios.post(API_URL + "/login", requestBody)
            console.log(response.data)
            sessionStorage.setItem("userID", response.data.userID)
            sessionStorage.setItem("email", response.data.email)
            sessionStorage.setItem("firstName", response.data.firstName)
            sessionStorage.setItem("lastName", response.data.lastName)
            sessionStorage.setItem("admin", response.data.isAdmin)
            console.log("logged in")
            console.log(response.data.firstName)
            console.log(sessionStorage.getItem("firstName"))
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
                    <label>Email Address</label>
                    <input onChange={e => {setEmail(e.target.value)}} type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-input-box">
                    <label>Password</label>
                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="form-button" onClick={login}>Login</button>
                <label style={{marginTop:"2vh"}}>Don't have an account? <Link to={'/register'}>Create an account</Link></label>

                <div>Admin account: <br></br>admin@ad.min<br></br>admin</div>
            </form>
        </div>
    );
};