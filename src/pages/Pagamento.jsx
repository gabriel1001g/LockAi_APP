import { useState } from "react";
import { Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pagamento() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [imagemComprovante, setImagemComprovante] = useState(null);
  const [alertaEnviado, setAlertaEnviado] = useState(false);

  const copiarCodigo = () => {
    navigator.clipboard.writeText("etechas@etec.gov.sp.br");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const handleEnviarComprovante = () => {
    // Aqui você pode colocar lógica de envio real
    // Agora só simulando com alerta
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 pt-20 pb-8 relative">
      <div className="fixed top-0 left-0 right-0 bg-background z-10 border-b border-gray-700 py-4">
        <div className="max-w-sm mx-auto flex justify-between items-center px-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-white">Pagamento</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md space-y-6">
        {/* Card do Plano */}
        <div className="p-5 bg-blue-600/30 border border-blue-700/50 rounded-xl shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Plano</p>
              <p className="text-white font-medium">Anual</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Valor</p>
              <p className="text-white font-bold text-lg">R$ 120,00</p>
            </div>
          </div>
        </div>

        {/* Card de Posição e Localização */}
        <div className="p-5 bg-blue-600/30 border border-blue-700/50 rounded-xl shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Posição</p>
              <p className="text-white font-medium">Alto</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Localização</p>
              <p className="text-white font-medium">Nr° 001</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col gap-6 mb-6">
          <h2 className="text-lg font-semibold text-white text-center">QRCODE PIX</h2>

          <div className="bg-white p-5 rounded-xl w-48 h-48 flex items-center justify-center mx-auto">
            <div className="text-center">
              {/* COLOCAR O QR CODE AQUI, BOA SORTE KKKKK */}
            </div>
          </div>

          {/* Chave PIX */}
          <div>
            <p className="text-gray-400 text-sm mb-2 text-center">Chave PIX</p>
            <p className="text-secondary font-medium text-center break-all">
              etechas@etec.gov.sp.br
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="space-y-4">
          <button
            onClick={copiarCodigo}
            className="w-full bg-secondary text-white py-4 rounded-xl font-medium hover:bg-secondary transition-colors flex items-center justify-center"
          >
            {copiado ? "Código Copiado!" : "Copiar Código PIX"}
          </button>

          <button
            onClick={() => setMostrarModal(true)}
            className="w-full bg-terceary text-white py-4 rounded-xl font-medium hover:bg-gray-600 transition-colors flex items-center justify-center"
          >
            Enviar Comprovante
          </button>
        </div>
      </div>

      {/* Modal de envio do comprovante */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-100 p-8 rounded-xl w-80 border border-blue-700/50 shadow-lg space-y-6">
            {!alertaEnviado ? (
              <>
                <div>
                  <h2 className="bg-blue-600 text-xl font-bold text-gray-800 text-center mb-1">Enviar Comprovante</h2>
                  <p className="text-sm font-medium text-gray-600 text-center">Formato: PNG ou PDF</p>
                </div>

                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => setImagemComprovante(e.target.files?.[0] || null)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none"
                />

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => {
                      setMostrarModal(false);
                      setImagemComprovante(null);
                      setAlertaEnviado(false);
                    }}
                    className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Voltar
                  </button>

                  <button
                    onClick={() => {
                      handleEnviarComprovante();
                      setAlertaEnviado(true);
                    }}
                    disabled={!imagemComprovante}
                    className={`px-5 py-2 rounded-lg text-white font-medium transition ${
                      imagemComprovante
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-green-300 cursor-not-allowed"
                    }`}
                  >
                    Enviar
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4 text-center">
                <div className="bg-blue-600 text-white text-lg font-semibold rounded px-4 py-2">
                  Comprovante enviado
                </div>
                <div className="bg-white text-gray-800 border border-gray-300 rounded px-4 py-3">
                  Seu comprovante foi recebido e está sendo analisado.
                </div>

                <button
                  onClick={() => {
                    setMostrarModal(false);
                    setImagemComprovante(null);
                    setAlertaEnviado(false);
                  }}
                  className="mt-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
