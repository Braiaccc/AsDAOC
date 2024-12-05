import { useState } from "react";
import Header from "../components/Header";
import Entrevero from "../components/Entrevero";

const Cadastro = () => {
  const [participants, setParticipants] = useState([]);

  const handleAddParticipant = (newParticipant) => {
    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="p-5">
        <h1 className="text-xl font-bold mb-4">Cadastro de Participantes</h1>
        <Entrevero onAddParticipant={handleAddParticipant} />
        <ul className="mt-4">
          {participants.map((participant, index) => (
            <li key={index} className="border p-2 mb-2 rounded">
              {participant.nome} - {participant.telefone}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Cadastro;
