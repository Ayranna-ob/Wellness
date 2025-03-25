import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ReflectionExercise.css';
import logo from "../assets/logo.png";

function ReflectionExercise() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="reflection-page">
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>

            <button className="back-button" onClick={() => navigate('/mindfulness')}>
                ← Back
            </button>

            <div className="reflection-content">
                <h1>Welcome to Reflection & Positivity</h1>
                <p>
                    Take a moment to slow down, reflect, and acknowledge the positive moments in your day.
                    Even the smallest wins matter.
                </p>

                <h2>Daily Reflection Ideas</h2>
                <p>Think about something that made you smile today — a kind word, a moment of peace, or a personal win.</p>
                <p>Ask yourself: What did I learn about myself today?</p>
                <p>Did I show resilience or kindness in a difficult situation?</p>
                <p>How do I want to grow moving forward?</p>

                <h2>Practicing Positivity</h2>
                <p>Start your day with a positive affirmation like, “I am capable and grounded.”</p>
                <p>Write down one thing you appreciate about yourself or your surroundings.</p>
                <p>Smile intentionally — it can shift your mood and mindset.</p>
                <p>Share a compliment or small act of kindness with someone else.</p>

                <h2>Quote of the Moment</h2>
                <em>“When you arise in the morning, think of what a precious privilege it is to be alive.” – Marcus Aurelius</em>
            </div>
        </div>
    );
}

export default ReflectionExercise;
