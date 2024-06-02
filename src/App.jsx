import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import StickyCardsPage from "./components/StickyCardsPage";
import "./App.css";

function App() {
  const [showStickyCards, setShowStickyCards] = useState(false);
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    setShowStickyCards(true);
    navigate("/About-Us");
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LandingPage onLearnMoreClick={handleLearnMoreClick} />}
        />
        <Route path="/About-Us" element={<StickyCardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
