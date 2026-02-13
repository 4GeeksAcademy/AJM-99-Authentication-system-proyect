import React, { useEffect, useState } from "react"
import { login } from "../services/backendServices.js";
import { useNavigate } from "react-router-dom";

export const Login = () => {

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
            login(user, navigate)
        }


    console.log(user)

    const loadMessage = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL

            if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

            const response = await fetch(backendUrl + "/api/hello")
            const data = await response.json()

            if (response.ok) dispatch({ type: "set_hello", payload: data.message })

            return data

        } catch (error) {
            if (error.message) throw new Error(
                `Could not fetch the message from the backend.
                Please check if the backend is running and the backend port is public.`
            );
        }

    }

    useEffect(() => {
        loadMessage()
    }, [])

    return (
        <div className="container mt-5 bg-dark text-light p-5 rounded">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email" placeholder="Enter your email" className="form-control bg-dark text-light" value={user.email} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" placeholder="Enter your password" className="form-control bg-dark text-light" value={user.password} onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    );
}; 