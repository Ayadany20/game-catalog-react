import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    const addToFavorites = (e) => {
        e.preventDefault();

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const exists = favorites.find((item) => item.id === game.id);

        if (!exists) {
            favorites.push(game);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Juego agregado a favoritos ❤️');
        } else {
            alert('Este juego ya está en favoritos');
        }
    };

    return (
        <div className="game-card">
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
                <button onClick={addToFavorites}>❤️ Agregar</button>
            </div>
        </div>
    );
};

export default GameCard;