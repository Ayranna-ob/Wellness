import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Fitness from "./pages/Fitness";
import Mindfulness from "./pages/Mindfulness";
import Analytics from "./pages/Analytics";
import Quizzes from "./pages/Quizzes";



function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/quizzes" element={<Quizzes />} />

        </Routes>
    );
}

export default App;
