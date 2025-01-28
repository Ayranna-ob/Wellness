import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import App from "./App";
import "./Homepage.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>  {/* ✅ Wrap App in BrowserRouter */}
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
