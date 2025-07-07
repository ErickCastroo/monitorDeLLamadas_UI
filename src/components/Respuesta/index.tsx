function Respuesta() {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="respuesta"
          className="block text-sm font-medium text-blue-700 mb-1"
        >
          Respuesta
        </label>
        <textarea
          id="respuesta"
          name="respuesta"
          rows={4}
          className="block w-full rounded-lg border border-blue-300 shadow-sm p-3 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Escribe la respuesta aquí..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        Enviar Respuesta
      </button>
    </form>
  )
}

export { Respuesta }
