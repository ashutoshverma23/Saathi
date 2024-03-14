import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import axios from 'axios';
export default function Login(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios({
                method: "POST",
                url: '/api/login',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MmQyNjQxNjJhMzEzNzcyM2JjYWQyIn0sImlhdCI6MTY4NzM0MzkyMn0.9EOAn2B2uk4H21fUs9WCtBYIYBUrIRyJ1P5UoEh1Vo4",
                },
                data: JSON.stringify({ 
                    email: credentials.email, 
                    password: credentials.password 
                })
            });
            // const json = await response.json();
            console.log(response.data);
            if (response.success) {
                //save the auth token and redirect
                localStorage.setItem("token", response.authtoken);
                // props.showAlert("Logged in Successfully", "success");
                navigate('/');
            }
            else {
                console.log(response.data);
                // props.showAlert("Invalid Details", "danger");
            }
        }catch(err){
            // props.showAlert("Something went wrong", "danger");
            console.log(err);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-container">
            <h2 className="heading">Login to store the Results</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={credentials.password}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}