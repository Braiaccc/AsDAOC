import { useState, useEffect } from 'react';


const EditParticipant = () => {

    const [participant, setParticipant] = useState({
        nome: '',
        telefone: '',
        egressoConvidado: false,
        pago: false,
    });


    useEffect(() => {
        const fetchParticipant = async () => {
            try {
                const response = await fetch(`http://localhost:3001/participants/${id}`);
                if (!response.ok) {
                    throw new Error(`Erro ao buscar participante: ${response.status}`);
                }
                const data = await response.json();
                setParticipant(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchParticipant();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/participants/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(participant),
            });

            if (!response.ok) {
                throw new Error(`Erro ao atualizar participante: ${response.status}`);
            }

            alert('Participante atualizado com sucesso!');
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setParticipant((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg max-w-sm space-y-4">
                <h1 className="text-2xl font-bold mb-4">Editar Participante</h1>
                <label className="block">
                    <span className="text-gray-700">Nome:</span>
                    <input
                        type="text"
                        name="nome"
                        value={participant.nome}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Telefone:</span>
                    <input
                        type="tel"
                        name="telefone"
                        value={participant.telefone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="egressoConvidado"
                        checked={participant.egressoConvidado}
                        onChange={handleChange}
                        className="h-4 w-4 text-black focus:ring-black"
                    />
                    <span className="text-gray-700">Egresso/Convidado</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="pago"
                        checked={participant.pago}
                        onChange={handleChange}
                        className="h-4 w-4 text-black focus:ring-black"
                    />
                    <span className="text-gray-700">Pago</span>
                </label>
                <button type="submit" className="w-full bg-pink-950 text-white py-2 rounded-md hover:bg-pink-900">
                    Atualizar
                </button>
            </form>
        </div>
    );
};

export default EditParticipant;
