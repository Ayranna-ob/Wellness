import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import logo from "../assets/logo.png";


const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="profile-page">

            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>


            <div className="profile-content">
                <h1>Welcome to Wellness!</h1>
                <p>Select an area to explore and enhance your wellness journey.</p>

                <div className="feature-grid">
                    <div className="feature-card">
                        <Link to="/fitness" className="feature-btn">Fitness Tracking</Link>
                        <p>Set personal fitness goals and track your progress.</p>
                    </div>
                    <div className="feature-card">
                        <Link to="/mindfulness" className="feature-btn">Mindfulness Exercises</Link>
                        <p>Explore guided mindfulness exercises to boost your mental wellbeing.</p>
                    </div>
                    <div className="feature-card">
                        <Link to="/analytics" className="feature-btn">Analytics Dashboard</Link>
                        <p>Analyse your wellness data and visualize your progress.</p>
                    </div>
                    <div className="feature-card">
                        <Link to="/quizzes" className="feature-btn">Interactive Quizzes</Link>
                        <p>Engage in self-awareness quizzes with real-time feedback.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
