import React from "react";
import { Routes, Route } from "react-router-dom";

// Importa tus páginas
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
