import Header from "../components/Header";
import CepCard from "../components/CepCard";
import Entrevero from "../components/Entrevero";
import ParticipantList from "../components/CadastroList";

const Home = ({ participants, onAddParticipant }) => {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col">
      <Header />
      <main className="flex-1 bg-rose-50 flex justify-center items-center">
        <div className="w-2/5 bg-rose-50 p-5 overflow-auto">
          <Entrevero onAddParticipant={onAddParticipant} />
          <CepCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
