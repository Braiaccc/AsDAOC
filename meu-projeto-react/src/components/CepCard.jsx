import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

function CepCard() {
    const [cepInput, setCepInput] = useState(null);
    const [data] = useFetch(cepInput);


    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const cep = formData.get("cep");
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        setCepInput(url);
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-8 space-y-3">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
                <label className="text-gray-700 font-semibold">CEP:</label>
                <input 
                    name="cep"
                    type="text" 
                    placeholder="Digite o CEP" 
                    className="flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-pink-950 text-white px-5 py-2 rounded-md hover:bg-pink-900 transition font-medium">
                    Pesquisar
                </button>
            </form>

          
            {data && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 p-4">
                    <h3 className="text-xl font-bold text-gray-800">Informações do CEP:</h3>
                    <p><strong>CEP:</strong> {data.cep}</p>
                    <p><strong>Cidade:</strong> {data.localidade}</p>
                    <p><strong>Bairro:</strong> {data.bairro || 'N/A'}</p>
                </div>
            )}
        </div>
    );
}

export default CepCard;
