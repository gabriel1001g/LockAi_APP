import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import CadastroPlanos from "./pages/CadastroPlanos"; 
import Home from "./pages/Home";

export default function App() {
  const [dados, setDados] = useState(null);

   useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = await fetch("https://lockaiapi.somee.com/usuario/");
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar API:", error);
      }
    };

    carregarDados();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/cadastro-planos" element={<CadastroPlanos />} />
        <Route path="/home" element={<Home />} />
        </Routes>

      </div>
      
    </Router>

    
   

    
  );
  
}
