import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FitnessTracker.css';
import logo from '../assets/logo.png';

const FitnessTracker = () => {
    const navigate = useNavigate();

    const [activity, setActivity] = useState('');
    const [minutes, setMinutes] = useState('');
    const [logs, setLogs] = useState(() => {
        const storedLogs = localStorage.getItem('fitnessLogs');
        return storedLogs ? JSON.parse(storedLogs) : [];
    });

    const [total, setTotal] = useState(() => {
        const storedTotal = localStorage.getItem('fitnessTotal');
        return storedTotal ? parseInt(storedTotal) : 0;
    });

    const goal = 150;
    const progress = Math.min((total / goal) * 100, 100);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activity && minutes) {
            const entry = {
                activity,
                minutes: parseInt(minutes),
                date: new Date().toLocaleDateString(),
            };
            const updatedLogs = [...logs, entry];
            const updatedTotal = total + parseInt(minutes);

            setLogs(updatedLogs);
            setTotal(updatedTotal);
            setActivity('');
            setMinutes('');

            localStorage.setItem('fitnessLogs', JSON.stringify(updatedLogs));
            localStorage.setItem('fitnessTotal', updatedTotal);
        }
    };

    const resetProgress = () => {
        setLogs([]);
        setTotal(0);
        localStorage.removeItem('fitnessLogs');
        localStorage.removeItem('fitnessTotal');
    };

    return (
        <div className="fitness-page">
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={() => alert('Logout clicked')}>Logout</button>
            </nav>

            <div className="fitness-container">
                <h2>Fitness Tracker</h2>
                <p className="fitness-description">
                    Welcome to your Fitness Tracker! Here, you can log any physical activity you do throughout the week —
                    whether it’s walking, running, dancing, or hitting the gym. Just type the name of your activity and how
                    many minutes you did it for. Your weekly goal is set at 150 minutes, and you can track your progress
                    visually as you go!
                </p>

                <form onSubmit={handleSubmit} className="fitness-form">
                    <input
                        type="text"
                        placeholder="Activity (e.g., Jogging)"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Minutes"
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                    />
                    <button type="submit">Log Activity</button>
                </form>

                <div className="progress-section">
                    <h3>Weekly Progress</h3>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>{total} / {goal} minutes logged this week</p>
                </div>

                {logs.length > 0 && (
                    <div className="log-section">
                        <h3>Activity Log</h3>
                        <ul>
                            {logs.map((log, index) => (
                                <li key={index}>
                                    {log.date}: {log.activity} - {log.minutes} minutes
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button className="reset-btn" onClick={resetProgress}>
                    Reset Weekly Progress
                </button>
            </div>

            <button className="back-button" onClick={() => navigate('/Profile')}>
                ← Back
            </button>
        </div>
    );
};

export default FitnessTracker;
