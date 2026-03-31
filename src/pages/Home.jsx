import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

const Home = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const API_KEY = '84701ef8e272403bb68bf18a27b71078';

    const fetchGames = async (searchTerm = '') => {
        try {
            setIsLoading(true);
            setError(null);

            const url = searchTerm
                ? `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`
                : `https://api.rawg.io/api/games?key=${API_KEY}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('No se pudieron cargar los juegos');
            }

            const data = await response.json();
            setGames(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchGames(search);
    };

    if (isLoading) {
        return <h2 className="state-message">Cargando juegos... ⏳</h2>;
    }

    if (error) {
        return <h2 className="state-message error-text">Error: {error} ❌</h2>;
    }

    return (
        <div className="container">
            <h2 className="title">Juegos Populares</h2>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Buscar videojuego..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '250px',
                        marginRight: '10px',
                        borderRadius: '8px',
                        border: '1px solid #ccc'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Buscar
                </button>
            </form>

            <div className="games-grid">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default Home;