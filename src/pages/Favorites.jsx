import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(data);
    }, []);

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter((game) => game.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="container">
            <h2 className="title">Mis Juegos Favoritos ❤️</h2>

            {favorites.length === 0 ? (
                <p>Aún no has agregado ningún juego a tu lista.</p>
            ) : (
                <div className="games-grid">
                    {favorites.map((game) => (
                        <div key={game.id} className="game-card">
                            <Link to={`/game/${game.id}`}>
                                <img
                                    src={game.background_image}
                                    alt={game.name}
                                    className="game-image"
                                />
                            </Link>

                            <div className="game-info">
                                <h3 className="game-title">{game.name}</h3>
                                <p className="game-rating">⭐ Calificación: {game.rating}</p>

                                <button onClick={() => removeFavorite(game.id)}>
                                    Eliminar ❌
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;