import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo.png";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5001/api/auth/login", {

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Login failed");

            localStorage.setItem("token", data.token);
            navigate("/profile");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <button className="back-button" onClick={() => navigate("/")}>
                ← Back to Homepage
            </button>

            <div className="login-page">
                <nav className="navbar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={logo} alt="Wellness Logo" />
                        </Link>
                    </div>
                    <Link to="/login" className="btn login-btn">Login</Link>
                </nav>

                <div className="welcome-section">
                    <h1>Welcome Back!</h1>
                    <p>Log in to continue your wellness journey</p>
                </div>

                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        {error && <p className="error-message">{error}</p>}

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Login</button>
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
