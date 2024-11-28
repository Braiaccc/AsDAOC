import ParticipantForm from './ParticipanteForm';
import PropTypes from 'prop-types';

const Entrevero = ({ onAddParticipant }) => {
    return (
        <div className="bg-white p-6 w-full max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastro</h2>
            <ParticipantForm onAddParticipant={onAddParticipant} />
        </div>
    );
};

Entrevero.propTypes = {
    onAddParticipant: PropTypes.func.isRequired,
};

export default Entrevero;
