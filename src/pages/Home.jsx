import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Home() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=84701ef8e272403bb68bf18a27b71078")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar juegos");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Juegos</h1>

      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default Home;
