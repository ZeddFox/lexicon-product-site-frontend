import '../styles/style.css';
import { API_URL } from "../config";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

export const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        try {
            const respone = await axios.post(API_URL + "/register", {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                password: data.password
            });
            alert("Axios post successful: " + respone)
            navigate("/login")
        }
        catch (error){
            alert("myError: " + error)
        }
    }
    
    return (
        <div className="page-main">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <div className="form-input-box">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" {...register("email")} required/>
                </div>
                    <div className="form-input-box">
                    <label>First & Last name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" {...register("firstName")} required/>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" {...register("lastName")} required/>
                </div>
                <div className="form-input-box">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" {...register("password")} required/>
                </div>
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
};