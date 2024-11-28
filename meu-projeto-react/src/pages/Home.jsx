import { useState } from "react";
import Header from "../components/Header";
import CepCard from "../components/CepCard";
import Entrevero from "../components/Entrevero";
import ParticipantList from "../components/CadastroList";

const defaultParticipants = [
  {
    nome: "Bryan Martinez",
    telefone: "99284-4245",
    fotoUrl:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/shrek-e1696623069422.jpeg?w=905",
    egressoConvidado: false,
    pago: true,
  },
];

const Home = () => {
  const [participants, setParticipants] = useState(defaultParticipants);

  const handleAddParticipant = (newParticipant) => {
    setParticipants((prevParticipants) => {
      const updatedList = [...prevParticipants, newParticipant];
      return updatedList.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  };

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <div className="w-2/5 bg-rose-50 p-5 overflow-auto">
          <Entrevero onAddParticipant={handleAddParticipant} />
          <CepCard />
        </div>
        <div className="w-3/5 bg-rose-50 p-5 text-center flex flex-col overflow-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            PARTICIPANTES
          </h1>
          <ParticipantList participants={participants} />
        </div>
      </main>
    </div>
  );
};

export default Home;
