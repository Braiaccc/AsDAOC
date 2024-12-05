import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-rose-950 border-b p-4 w-full flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src="https://images.tcdn.com.br/img/img_prod/606732/produto_teste_3919_1_85010fa0e84b19ffcfe78386f6f702cd_20240903120335.jpg"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold text-white">Entrevero</h1>
      </div>
      <nav className="flex space-x-4">
        <Link
          to="/"
          className="text-white font-medium hover:text-gray-300 transition"
        >
          Cadastro
        </Link>
        <Link
          to="/lista"
          className="text-white font-medium hover:text-gray-300 transition"
        >
          Lista
        </Link>
      </nav>
    </header>
  );
};

export default Header;
