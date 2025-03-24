import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BreathingExercise.css';
import logo from '../assets/logo.png';

const BreathingExercise = () => {
    const [phase, setPhase] = useState('Inhale');
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase(prev => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
            setCount(prev => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="breathing-page">


            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>

            <div className="breathing-container">
                <h1>Breathing Exercise</h1>
                <p className="breathing-intro">
                    This breathing technique can help you calm down and feel more grounded in just a few minutes.
                </p>

                <div className={`breathing-circle ${phase.toLowerCase()}`}>
                    <p className="phase-text">{phase}</p>
                </div>

                <p className="breathing-note">Breathe in as the circle expands, breathe out as it shrinks.</p>
                <p className="breathing-count">Cycle: {count}</p>

                <div className="instructions">
                    <h2>How to do it</h2>
                    <ul>
                        <li>Get comfortable – seated, lying down, whatever works best.</li>
                        <li>Let your body relax and rest your feet flat if sitting.</li>
                        <li>Breathe deeply into your belly – don’t force it.</li>
                        <li>Inhale through your nose, exhale through your mouth.</li>
                        <li>Try to count to 5 with each inhale and each exhale.</li>
                        <li>Stick with it for 5 minutes or more if you can.</li>
                    </ul>
                </div>

                <button className="back-button" onClick={() => navigate(-1)}>
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default BreathingExercise;
