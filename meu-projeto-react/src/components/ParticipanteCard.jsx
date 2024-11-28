import PropTypes from 'prop-types';

const ParticipantCard = ({ participant }) => {
 

    const { fotoUrl, nome, telefone, egressoConvidado, pago } = participant;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <img src={fotoUrl} alt={`${nome}'s Foto`} className="w-20 h-20 rounded-full object-cover" />
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{nome}</h3>
                <p className="text-sm text-gray-600">Telefone: {telefone}</p>
                <p className="text-sm text-gray-600">{egressoConvidado ? 'Egresso/Convidado' : 'Estudante'}</p>
                <p className={`text-sm font-medium ${pago ? 'text-green-600' : 'text-red-600'}`}>
                    {pago ? 'Confirmado' : 'Não Confirmado'}
                </p>
            </div>
        </div>
    );
};

ParticipantCard.propTypes = {
    participant: PropTypes.shape({
        fotoUrl: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        telefone: PropTypes.string.isRequired,
        egressoConvidado: PropTypes.bool.isRequired,
        pago: PropTypes.bool.isRequired,
    }),
};

export default ParticipantCard;
