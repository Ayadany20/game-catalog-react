import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GameDetails = () => {
    const { id } = useParams();

    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = 'e51cd8bf7aac4056819f92ca6c4e69a5';

        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

                if (!response.ok) {
                    throw new Error('No se pudieron cargar los detalles del juego');
                }

                const data = await response.json();
                setGame(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGameDetails();
    }, [id]);

    if (isLoading) {
        return <h2 className="state-message">Cargando detalles... ⏳</h2>;
    }

    if (error) {
        return <h2 className="state-message error-text">Error: {error} ❌</h2>;
    }

    return (
        <div className="container">
            <h2 className="title">{game.name}</h2>

            <img
                src={game.background_image}
                alt={game.name}
                className="game-image"
                style={{ maxWidth: '500px', borderRadius: '12px', marginBottom: '20px' }}
            />

            <p><strong>Calificación:</strong> {game.rating}</p>
            <p><strong>Fecha de lanzamiento:</strong> {game.released}</p>
            <p><strong>Metacritic:</strong> {game.metacritic ?? 'No disponible'}</p>

            <div style={{ marginTop: '20px' }}>
                <strong>Descripción:</strong>
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
            </div>
        </div>
    );
};

export default GameDetails;