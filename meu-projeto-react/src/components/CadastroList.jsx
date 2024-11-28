import ParticipantCard from './ParticipanteCard';
import PropTypes from 'prop-types';

const ParticipantList = ({ participants }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 p-5 lg:grid-cols-2 gap-4">
            {participants.map((participant, index) => (
                <ParticipantCard key={index} participant={participant} />
            ))}
        </div>
    );
};

ParticipantList.propTypes = {
    participants: PropTypes.arrayOf(
        PropTypes.shape({
            nome: PropTypes.string.isRequired,
            telefone: PropTypes.string.isRequired,
            egressoConvidado: PropTypes.bool.isRequired,
            pago: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default ParticipantList;
