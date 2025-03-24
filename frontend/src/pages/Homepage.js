import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import logo from "../assets/logo.png";

const Homepage = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Wellness Logo" className="logo-img" />
                </Link>
                <Link to="/login" className="btn login-btn">Login</Link>
            </nav>

            <section className="hero">
                <h1>Welcome to Wellness</h1>
                <p>Integrating fitness, mindfulness, and analytics to promote workplace wellbeing.</p>
                <Link to="/register" className="btn create-btn">Create Account</Link>
                <Link to="/login" className="btn login-btn">Login</Link>
            </section>

            <footer className="footer">
                <p>© 2025 Wellness. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;
