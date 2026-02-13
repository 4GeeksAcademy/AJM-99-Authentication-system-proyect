import React, { useState } from "react"
import { login, signup } from "../services/backendServices.js";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const [ user, setUser ] = useState({
            email: "",
            password: ""
        })
        const navigate = useNavigate()
    
        const handleChange = (e) => {
            setUser({
                ...user,
                [e.target.name]:e.target.value
            })
        }
    
            const handleSubmit = (e) => {
                e.preventDefault()
                if (!user.email || !user.password){
                    alert("All fields are required")
                    return
                }
                signup(user, navigate)
            }
    return (
        <div className="container mt-5 bg-dark text-light p-5 rounded">
            <div className="d-flex align-items-center mb-4 justify-content-center text-center text-warning">
                <span className="text-warning"><img src="src/front/assets/img/Secret order logo.png" width="60" height="60" className="d-inline-block align-top mr-2"></img></span> 
                <span><h1>Join the Secret Order</h1></span>
            </div>
            <p>Fill in the form below to join our ultra secret club!</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control bg-dark text-light" id="email" name="email" placeholder="Enter your email"  onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control bg-dark text-light" id="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-warning w-100">Sign Up</button>
            </form>
        </div>
    );
};
