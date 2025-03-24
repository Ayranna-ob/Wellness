import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './GuidedMeditation.css';
import logo from '../assets/logo.png';

const GuidedMeditation = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="meditation-page">

            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>


            <div className="meditation-script">
                <h1>Guided Meditation</h1>
                <p>Before you begin your meditation, take a moment to get comfortable.</p>
                <p>Sit or lie down in a way that feels supportive and relaxed. Let your body settle and rest. This is your time.</p>
                <p>In a few moments, when you’re ready to close your eyes, you’ll begin to shift your attention inward.</p>
                <p>Start by becoming aware of your body.<br />Feel the ground beneath you — steady and supportive.<br />Soften your shoulders. Unclench your jaw. Let your hands relax.</p>
                <p>Begin to notice your breath.<br />Don’t change it — just observe.<br />Feel the inhale and exhale, however it naturally flows.</p>
                <p>With each breath, imagine a sense of calm gently spreading through your body.<br />As you breathe in, invite ease.<br />As you breathe out, let go of anything heavy.</p>
                <p>Your thoughts may wander — and that’s okay.<br />When they do, gently guide your focus back to your breath.</p>
                <p>You can now begin your meditation — whether it’s for a few minutes or longer.<br />Let go of expectations. Just be present.</p>
                <p><strong>You're ready.</strong></p>
            </div>


            <button className="back-button" onClick={() => navigate('/mindfulness')}>
                ← Back
            </button>
        </div>
    );
};

export default GuidedMeditation;
