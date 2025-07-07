function Respuesta() {
  return (
    <>
      <form action="">
        <div className="m-1">
          <div>
            <label htmlFor="respuesta" className="block mb-3 text-sm font-medium text-gray-700">
              Respuesta
            </label>
            <textarea
              id="respuesta"
              name="respuesta"
              rows={4}
              className="p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enviar Respuesta
        </button>
      </form>
    </>
  )
}

export { Respuesta }