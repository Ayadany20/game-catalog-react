import React from "react";

function GameCard({ game }) {
  return (
    <div>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} width="200" />
    </div>
  );
}

export default GameCard;
