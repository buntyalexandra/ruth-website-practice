import React from "react";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

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
