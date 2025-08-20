
export default function Home() {

    return(
    <div className="flex flex-col min-h-screen bg-[#03033D] text-white relative justify-center items-center">
        <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md">
            <h1 className="text-2xl font-semibold text-white mb-4">Bem Vindo!</h1>
            <h3 className="text-1 font-semibold text-white">Recomendamos para você</h3>
            <h3 className="text-1 font-semibold text-white mb-4">Novas locações</h3>
            <div className="flex flex-col flex-1 px-6">

            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20">
            <span className="text-lg">Imagem</span>
          </div>
          <div className="bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20">
            <span className="text-lg">Imagem</span>
          </div>

        </div>
    </div>
    )

}