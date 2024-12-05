import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lista from './pages/Lista';
import EditParticipant from './components/EditParticipant';

const App = () => {
    const [participants, setParticipants] = useState([]);

    // Carrega os dados do servidor ao iniciar
    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await fetch('http://localhost:3001/participants');
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }
                const data = await response.json();
                setParticipants(data);
            } catch (error) {
                console.error('Erro ao buscar participantes:', error);
            }
        };

        fetchParticipants();
    }, []);

    const handleAddParticipant = (newParticipant) => {
        setParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home participants={participants} onAddParticipant={handleAddParticipant} />} />
                <Route path="/lista" element={<Lista participants={participants} />} />
                <Route path="/editar/:id" element={<EditParticipant />} />
            </Routes>
        </Router>
    );
};

export default App;
