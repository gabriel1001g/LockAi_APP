import { useState } from "react";

import MenuRodape from "../components/MenuRodape";

export default function Locacao() {
  const [posicaoSelecionada, setPosicaoSelecionada] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#03033D] text-white relative justify-center items-center">
        <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md mb-2">
    <div >
      <h2>Locações</h2>

      <input
        type="text"
        placeholder="Buscar"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "20px",
          background: "#222",
          color: "white",
        }}
      />

      <h4>Posições</h4>
      <div style={{ marginBottom: "20px" }}>
        {["Alto", "Médio", "Baixo"].map((pos) => (
          <div
            key={pos}
            onClick={() => setPosicaoSelecionada(pos)}
            style={{
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              background: posicaoSelecionada === pos ? "#007aff" : "#111",
              color: "white",
            }}
          >
            {pos}
          </div>
        ))}
      </div>

      {posicaoSelecionada && (
        <>
          <h4>Localização</h4>
          {["Nº 001", "Nº 002", "Nº 003"].map((loc) => (
            <div
              key={loc}
              onClick={() => alert(`Reserva iniciada para ${posicaoSelecionada} - ${loc}`)}
              style={{
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#111",
                color: "white",
              }}
            >
              {loc}
            </div>
            
          ))}
        </>
      )}

      <MenuRodape></MenuRodape>
    </div>
    </div>
    </div>
  );
}