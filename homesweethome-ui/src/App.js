import "./App.css";
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HorizontalBar from "./components/HorizontalBar";
import MainPage from "./pages/MainPage";
import GroceriesPage from "./pages/GroceriesPage";

function App() {
  return (
    <Router>
      <div class="container">
        <HorizontalBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
