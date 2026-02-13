import React, { useEffect, useState } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../services/backendServices.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()

	const goToPage = (e) => {
		navigate('/' + e.target.name)
	}
	

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
		<div className="container mt-5 text-center">
			<div className="text-center bg-dark p-5 rounded text-light">
				<div className="d-flex align-items-center mb-4 justify-content-center text-center text-warning flex-column">
					<span className="text-warning"><img src="src/front/assets/img/Secret order logo.png" width="300" height="300" className="d-inline-block align-top mr-2"></img></span> 
					<span><h1>Welcome to the Secret Order</h1></span>
				</div>
				<p className="lead"><strong>The most secretive organization in the world</strong></p>
				<p> Login with your secret member credentials to access the secret information, or if you are not on the list, sign up to know all about the secrets of the Secret Order.</p>
				<button type="submit" className="btn btn-warning w-100" onClick={goToPage} name="login">Login</button>
				<button type="submit" className="btn btn-warning w-100 mt-2" onClick={goToPage} name="signup">Signup</button>
			</div>
		</div>
	);
}; 