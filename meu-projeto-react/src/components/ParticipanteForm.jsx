import { useState } from 'react';
import PropTypes from 'prop-types';

const ParticipantForm = ({ onAddParticipant }) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [fotoUrl, setFotoUrl] = useState('');
    const [egressoConvidado, setEgressoConvidado] = useState(false);
    const [pago, setConfirmado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newParticipant = {
            nome,
            telefone,
            fotoUrl,
            egressoConvidado,
            pago,
        };

        onAddParticipant(newParticipant);

        setNome('');
        setTelefone('');
        setFotoUrl('');
        setEgressoConvidado(false);
        setConfirmado(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg max-w-sm mx-auto space-y-4">
            <label className="block">
                <span className="text-gray-700 font-semibold">Nome:</span>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
            </label>
            <label className="block">
                <span className="text-gray-700 font-semibold">Telefone:</span>
                <input 
                    type="tel" 
                    placeholder="Telefone" 
                    value={telefone} 
                    onChange={(e) => setTelefone(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
            </label>
            <label className="block">
                <span className="text-gray-700 font-semibold">URL da Foto:</span>
                <input 
                    type="url" 
                    placeholder="URL da Foto" 
                    value={fotoUrl} 
                    onChange={(e) => setFotoUrl(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border  focus:ring-black"
                    required
                />
            </label>
            <label className="flex items-center space-x-2">
                <input 
                    type="checkbox" 
                    checked={egressoConvidado} 
                    onChange={() => setEgressoConvidado(!egressoConvidado)} 
                    className="h-4 w-4 text-black focus:ring-black"
                />
                <span className="text-gray-700">Egresso/Convidado</span>
            </label>
            <label className="flex items-center space-x-2">
                <input 
                    type="checkbox" 
                    checked={pago} 
                    onChange={() => setConfirmado(!pago)} 
                    className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="text-gray-700">Pago</span>
            </label>
            <button type="submit" className="w-full bg-pink-950 text-white py-2 rounded-md hover:bg-pink-900">
                Cadastrar
            </button>
        </form>
    );
};

ParticipantForm.propTypes = {
    onAddParticipant: PropTypes.func.isRequired,
};

export default ParticipantForm;
