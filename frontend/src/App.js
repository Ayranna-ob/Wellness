import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import FitnessTracker from './pages/FitnessTracker';
import Mindfulness from "./pages/Mindfulness";
import Analytics from "./pages/Analytics";
import Quizzes from "./pages/Quizzes";
import BreathingExercise from './pages/BreathingExercise';
import GuidedMeditation from './pages/GuidedMeditation';
import ReflectionExercise from './pages/ReflectionExercise';



function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/fitness" element={<FitnessTracker />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="/BreathingExercise" element={<BreathingExercise />} />
            <Route path="/GuidedMeditation" element={<GuidedMeditation />} />
            <Route path="/ReflectionExercise" element={<ReflectionExercise />} />
        </Routes>
    );
}

export default App;
