import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from "react-router-dom"; 
import { API_URL } from "../config";
import useAdminMode from '../hooks/useAdminMode';
import axios from 'axios';

export const Profile = () => {
    const navigate = useNavigate();
    const { adminMode, isAdmin, toggleAdminMode } = useAdminMode();
    const [user, setUser] = useState([]);
    let { userID } = useParams();
    
    const getUser = async () => {
        try {
            const response = await axios.get(API_URL + "/getuser?userID=" + userID);
            setUser(response.data)
            console.log("Got user from backend")
        }
        catch (error) {
            console.error("Error getting products: ", error);
        }
    }

    function notAllowed(){
        return <div>You are not allowed to access this page.</div>
    }

    useEffect(() => {
        if (userID){
            if (userID === sessionStorage.getItem("userID") || adminMode === "true"){
                getUser();
            }
            else{
                notAllowed();
            }
        }
        else{
            return <div>No user found. Are you logged in?</div>
        }
    },[adminMode])

    function Logout(){
        sessionStorage.clear();
        console.log("Logged out")
        navigate("/")
    }

    return (
        <div className="page-main">
            <div>Profile page for user: {user.firstName} with ID: {user.userID}</div>
            {
                sessionStorage.getItem("userID") === userID ? <button onClick={Logout}>Log out</button> : <div></div>
            }
        </div>
    );
};