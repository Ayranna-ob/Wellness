import React from "react";
import "../Homepage.css";

const Homepage = () => {
    return (
        <div>
            {/* 🌟 Navbar */}
            <nav className="navbar">
                <h1>Wellness</h1>
                <a href="/login" className="btn login-btn">Login</a>
            </nav>

            {/* 🌟 Hero Section */}
            <section className="hero">
                <h1>Welcome to Wellness</h1>
                <p>Integrating fitness, mindfulness, and analytics to promote workplace wellbeing.</p>
                <a href="/register" className="btn create-btn">Create Account</a>
                <a href="/login" className="btn login-btn">Login</a>
            </section>

            {/* 🌟 Features Section */}
            <section className="features">
                <div className="feature-card">
                    <h3>🏃‍♂️ Fitness Tracking</h3>
                    <p>Set personal fitness goals and monitor progress through visual charts and summaries.</p>
                </div>
                <div className="feature-card">
                    <h3>🧘 Mindfulness Exercises</h3>
                    <p>Guided meditations and stress management tools to support mental health.</p>
                </div>
                <div className="feature-card">
                    <h3>📊 Analytics Dashboards</h3>
                    <p>Gain insights into your wellness progression with activity summaries and quiz results.</p>
                </div>
                <div className="feature-card">
                    <h3>📝 Interactive Quizzes</h3>
                    <p>Engaging self-awareness quizzes with real-time feedback to enhance wellbeing.</p>
                </div>
            </section>

            {/* 🌟 Footer */}
            <footer className="footer">
                <p>&copy; 2025 Wellness. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;

