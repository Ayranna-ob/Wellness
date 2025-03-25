
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Quizzes.css';
import logo from '../assets/logo.png';

const quizQuestions = [
    {
        question: "What is a common symptom of anxiety?",
        options: ["Excessive sweating", "Frequent yawning", "Blurred vision", "Hiccups"],
        answer: "Excessive sweating"
    },
    {
        question: "Which of the following is considered a healthy coping mechanism for stress?",
        options: ["Avoiding people", "Overeating", "Physical activity", "Binge-watching TV all night"],
        answer: "Physical activity"
    },
    {
        question: "How much sleep is generally recommended for adults per night?",
        options: ["4–5 hours", "6–8 hours", "9–10 hours", "11–12 hours"],
        answer: "6–8 hours"
    },
    {
        question: "What is mindfulness?",
        options: [
            "A way to control others' emotions",
            "Focusing only on future goals",
            "Paying attention to the present moment",
            "Constantly reviewing past events"
        ],
        answer: "Paying attention to the present moment"
    },
    {
        question: "Which professional can diagnose and prescribe medication for mental health disorders?",
        options: ["Life coach", "Psychologist", "Psychiatrist", "Wellness instructor"],
        answer: "Psychiatrist"
    }
];

const Quizzes = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const handleAnswer = () => {
        if (selectedOption === null) return;

        if (selectedOption === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setShowResults(true);
        }
    };

    const getFeedback = () => {
        if (score >= 4) return "Great job! Your answers suggest a healthy state of mind.";
        if (score >= 2) return "You're doing okay, but there might be room for improvement.";
        return "Consider exploring some wellness resources or talking to someone you trust.";
    };

    return (
        <div className="quiz-page">

            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Wellness Logo" />
                    </Link>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>

            <div className="quiz-container">
                <h1>Mental Health Quiz</h1>

                {showResults ? (
                    <div className="results">
                        <h2>Your Score: {score} / {quizQuestions.length}</h2>
                        <p>{getFeedback()}</p>
                    </div>
                ) : (
                    <>
                        <h2>{quizQuestions[currentQuestion].question}</h2>
                        <ul className="options">
                            {quizQuestions[currentQuestion].options.map((option, index) => (
                                <li
                                    key={index}
                                    className={selectedOption === index ? 'selected' : ''}
                                    onClick={() => setSelectedOption(index)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                        <button className="submit-btn" onClick={handleAnswer}>
                            {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next"}
                        </button>
                    </>
                )}
            </div>

            <button className="back-button" onClick={() => navigate('/Profile')}>
                ← Back
            </button>
        </div>
    );
};

export default Quizzes;
