import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HorizontalBar from "./components/HorizontalBar";
import MainPage from "./pages/MainPage";
import GroceriesPage from "./pages/GroceriesPage";
// import BgFireFlies from "./components/backgrounds/BgFireFlies";
// import BgShootingStars from "./components/backgrounds/BgShootingStars";
// import BgGradientWaves from "./components/backgrounds/BgGradientWaves";
import BgSnow from "./components/backgrounds/BgSnow";
// import BgMoon from "./components/backgrounds/BgMoon";
 

function App() {
  return (
      <Router>
        <div className="container">
          {/* <BgMoon /> */}
          <HorizontalBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<MainPage />}
            />
            <Route path="/groceries" element={<GroceriesPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
