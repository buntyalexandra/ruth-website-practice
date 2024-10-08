import React from "react";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
