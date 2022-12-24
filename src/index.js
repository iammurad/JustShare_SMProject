import React, { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
    <Router>
      <App />
    </Router>
    </StrictMode>
  );