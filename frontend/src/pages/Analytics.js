import React from 'react';
import { Link } from 'react-router-dom';
import './Analytics.css';
import logo from '../assets/logo.png';

const Analytics = () => {
    const totalFitnessMinutes = parseInt(localStorage.getItem('fitnessTotal')) || 0;
    const weeklyGoal = 150;
    const fitnessProgress = Math.min((totalFitnessMinutes / weeklyGoal) * 100, 100);

    const quizScore = parseInt(localStorage.getItem('quizScore')) || 0;
    const totalQuizQuestions = 5;
    const quizProgress = (quizScore / totalQuizQuestions) * 100;

    return (
        <div className="analytics-page">
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={() => alert("Logout clicked")}>Logout</button>
            </nav>

            <div className="analytics-container">
                <h2>Your Wellness Progress</h2>

                <div className="progress-block">
                    <h3>Fitness Activity</h3>
                    <p>{totalFitnessMinutes} / {weeklyGoal} minutes completed this week</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${fitnessProgress}%` }}></div>
                    </div>
                </div>

                <div className="progress-block">
                    <h3>Mental Health Quiz</h3>
                    <p>You scored {quizScore} out of {totalQuizQuestions}</p>
                    <div className="progress-bar">
                        <div className="progress-fill quiz" style={{ width: `${quizProgress}%` }}></div>
                    </div>
                </div>

                <button className="back-button" onClick={() => window.history.back()}>
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default Analytics;
