import { useState } from "react";

const ParticipantList = ({ participants, onDelete, onEdit }) => {
  const [editingParticipant, setEditingParticipant] = useState(null); // Armazena o participante sendo editado
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    egressoConvidado: false,
    pago: false,
  });


  const handleEditClick = (participant) => {
    setEditingParticipant(participant.id);
    setFormData({
      nome: participant.nome,
      telefone: participant.telefone,
      egressoConvidado: participant.egressoConvidado,
      pago: participant.pago,
    });
  };

  const handleSave = () => {
    onEdit(editingParticipant, formData);
    setEditingParticipant(null); 
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      {participants.map((participant) =>
        editingParticipant === participant.id ? (
          <div
            key={participant.id}
            className="border p-4 rounded-lg shadow-md bg-white mb-4"
          >
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="block w-full px-2 py-1 mb-2 border"
              placeholder="Nome"
            />
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="block w-full px-2 py-1 mb-2 border"
              placeholder="Telefone"
            />
            <label>
              <input
                type="checkbox"
                name="egressoConvidado"
                checked={formData.egressoConvidado}
                onChange={handleChange}
              />
              Egresso/Convidado
            </label>
            <label>
              <input
                type="checkbox"
                name="pago"
                checked={formData.pago}
                onChange={handleChange}
              />
              Pago
            </label>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Salvar
            </button>
            <button
              onClick={() => setEditingParticipant(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded mt-2 ml-2"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div
            key={participant.id}
            className="border p-4 rounded-lg shadow-md bg-white mb-4 flex justify-between items-center"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{participant.nome}</h2>
              <p>Telefone: {participant.telefone}</p>
              <p>
                {participant.egressoConvidado
                  ? "Egresso/Convidado: Sim"
                  : "Egresso/Convidado: Não"}
              </p>
              <p>{participant.pago ? "Pago: Sim" : "Pago: Não"}</p>
            </div>
            <div>
              <button
                onClick={() => handleEditClick(participant)}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(participant.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ParticipantList;
