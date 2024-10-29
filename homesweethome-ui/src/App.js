import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HorizontalBar from "./components/HorizontalBar";
import MainPage from "./pages/MainPage";
import GroceriesPage from "./pages/GroceriesPage";
import PlanPage from "./pages/PlanPage";
// import BgFireFlies from "./components/backgrounds/BgFireFlies";
// import BgShootingStars from "./components/backgrounds/BgShootingStars";
// import BgGradientWaves from "./components/backgrounds/BgGradientWaves";
import BgSnow from "./components/backgrounds/BgSnow";
import InventairePage from "./pages/InventairePage";
import NotesPage from "./pages/NotesPage";
import MusiquePage from "./pages/MusiquePage";
// import BgMoon from "./components/backgrounds/BgMoon";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <BgMoon /> */}
        <HorizontalBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/inventaire" element={<InventairePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/musique" element={<MusiquePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
