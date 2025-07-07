import { FaSearch } from "react-icons/fa"

function Help() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 ">

      <h1 className="text-3xl font-bold text-blue-700 text-center">
        ¿En qué podemos ayudarte?
      </h1>

      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
        <input
          type="text"
          placeholder="Escribe tu pregunta o problema aquí..."
          className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
        />
      </div>
    </div>
  )
}

export { Help }
