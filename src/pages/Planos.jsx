import MenuRodape from "../components/MenuRodape";
import BotaoVoltar from "../components/BotaoVoltar";

export default function Planos() {
  return (
    <div className="flex flex-col min-h-screen bg-[#03033D] text-white relative justify-center items-center">
      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md mb-2">
        <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md mb-2">
          <div className="flex justify-between items-center mb-4">
            <BotaoVoltar />
            <h1 className="text-2xl font-semibold text-white">
              Planos
            </h1>
          </div>

          <div className="w-70 h-[2px] bg-blue-500 mb-4"></div>
          <div>
            <h2>Planos</h2>

            <div
              style={{
                background: "#111",
                borderRadius: "8px",
                marginBottom: "20px",
                padding: "10px",
              }}
            >
              <img
                src="/src/assets/img/armario.jpg"
                alt="Armário"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>Plano Semestral</span>
                <strong>R$ 60,00</strong>
              </div>
            </div>

            <div
              style={{
                background: "#111",
                borderRadius: "8px",
                marginBottom: "20px",
                padding: "10px",
              }}
            >
              <img
                src="/src/assets/img/armario2.jpg"
                alt="Armário"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>Plano Anual</span>
                <strong>R$ 120,00</strong>
              </div>
            </div>

            <MenuRodape></MenuRodape>
          </div>
        </div>
      </div>
    </div>
  );
}
