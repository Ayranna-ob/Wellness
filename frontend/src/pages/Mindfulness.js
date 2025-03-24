import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Mindfulness.css';
import logo from "../assets/logo.png";

const Mindfulness = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="mindfulness-page">

            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo"/>
                    </Link>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>

            <h1>Mindfulness Exercises</h1>
            <p>Explore the exercises below to boost your mental wellbeing:</p>

            {/* Exercise Cards */}
            <div className="exercise-list">
                <div className="exercise-item">
                    <h2>Breathing Exercise</h2>
                    <p>A simple breathing exercise to help reduce stress.</p>
                    <Link to="/BreathingExercise">
                        <button>Start Exercise</button>
                    </Link>
                </div>

                <div className="exercise-item">
                    <h2>Guided Meditation</h2>
                    <p>A 10-minute guided meditation for relaxation.</p>
                    <Link to="/GuidedMeditation">
                        <button>Start Exercise</button>
                    </Link>
                </div>

                <div className="exercise-item">
                    <h2>Reflection</h2>
                    <p>Reflect and embrace positivity.</p>
                    <Link to="/ReflectionExercise">
                        <button>Start Exercise</button>
                    </Link>
                </div>
            </div>


            <button className="back-button" onClick={() => navigate('/Profile')}>
                Back
            </button>
        </div>
    );
};

export default Mindfulness;
