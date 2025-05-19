import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from "../config";

export const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();
        try{
            const requestBody = {email, firstName, lastName, password}
            const respone = axios.post($API_BASE_URL + "/register", requestBody)
            navigate("/login")
        }
        catch (error){
            console.log(error);
        }
    }
    
    return (
        <div className="page-main">
            <form>
                <h2>Register</h2>
                <div className="form-input-box">
                    <p>Email Address</p>
                    <input onChange={e => {setEmail(e.target.value)}} type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-input-box">
                <p>Name</p>
                <input onChange={e => {setFirstName(e.target.value)}} type="text" className="form-control" id="firstName" placeholder="First Name"/>
                <input onChange={e => {setLastName(e.target.value)}} type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                </div>
                <div className="form-input-box">
                    <p>Password</p>
                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
};