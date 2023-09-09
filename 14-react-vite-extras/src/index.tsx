import React from "react";
import ReactDom from "react-dom/client";
import App from './App';
import "./index.css";

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)