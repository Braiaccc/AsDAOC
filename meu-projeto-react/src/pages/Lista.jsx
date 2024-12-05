import { useState, useEffect } from "react";
import Header from "../components/Header";
import ParticipantList from "../components/CadastroList";

const Lista = () => {
  const [participants, setParticipants] = useState([]);


  const fetchParticipants = async () => {
    try {
      const response = await fetch("http://localhost:3001/participants");
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
      console.error("Erro ao buscar participantes:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/participants/${id}`, {
        method: "DELETE",
      });
      setParticipants((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Erro ao excluir participante:", error);
    }
  };


  const handleEdit = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3001/participants/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const updatedParticipant = await response.json();
      setParticipants((prev) =>
        prev.map((p) => (p.id === id ? updatedParticipant : p))
      );
    } catch (error) {
      console.error("Erro ao editar participante:", error);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col">
      <Header />
      <main className="p-5">
        <div className="w-full bg-rose-50 p-5 text-center flex flex-col overflow-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">PARTICIPANTES</h1>
          <ParticipantList
            participants={participants}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </main>
    </div>
  );
};

export default Lista;
