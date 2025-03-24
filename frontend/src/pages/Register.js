import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "../assets/logo.png";



const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            firstName: name,
            lastName: lastName,
            email: email,
            password: password
        };

        console.log("Submitting registration:", userData);

        try {
            const response = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                navigate("/login");
            } else {
                alert(`Registration failed: ${data.message}`);
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Something went wrong. Please try again.");
        }

    };

    return (
        <>
            <button className="back-button" onClick={() => navigate("/")}>
                ← Back to Homepage
            </button>

            <div className="register-page">
                <nav className="navbar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={logo} alt="Wellness Logo" />
                        </Link>
                    </div>
                    <Link to="/login" className="btn login-btn">Login</Link>
                </nav>

                <div className="welcome-section">
                    <h1>Create an Account</h1>
                    <p>Start your wellness journey today</p>
                </div>

                <div className="register-container">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>

                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />


                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button type="submit">Sign Up</button>

                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;

