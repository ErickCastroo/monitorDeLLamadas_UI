function SignUp() {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center bg-[url('./bgAuth.jpg')]">

        <div className='absolute inset-0 bg-black/35' />
        <div className='relative z-10 flex items-center justify-center min-h-screen'>
          <div className='bg-white/30 backdrop-blur-md w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold text-center mb-4 text-white'>
              Registro
            </h1>
            <p className='text-blue-300 flex justify-center font-mono mb-2'>Regista a un usuario para Oomapas Nogales
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log('Formulario enviado')
              }}
              className='space-y-4'
            >

              <div>
                <input
                  type='text'
                  id='name'
                  className='w-full py-2 border-b-1 border-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your username'
                  required

                />
              </div>
              <div>
                <input
                  type='password'
                  id='password'
                  className='w-full py-2 border-b-1 border-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your password'
                  required

                />
              </div>
              <div>
                <select
                  className='w-full py-2 border-b-1 border-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  name='' id=''>
                  <option className='text-blue-700' selected value='user'>Usuario</option>
                  <option className='text-blue-700' value='admin'>Administrador</option>
                </select>
              </div>
              <button
                type='submit'
                className='md:w-1/3 w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export { SignUp }
