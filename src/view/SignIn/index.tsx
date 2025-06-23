

function SignIn() {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center bg-[url('./bgAuth.jpg')]">
        <div className='absolute inset-0 bg-black/35' />
        <div className='relative z-10 flex items-center justify-center min-h-screen'>
          <div className='bg-white/30 backdrop-blur-md w-1/2 xl:w-1/3 p-8 shadow-lg rounded-lg'>
            <h1 className='text-4xl font-extrabold text-center mb-2 text-white'>
              Iniciar Sesión
            </h1>
            <p className='text-blue-300 mb-2 flex justify-center font-mono'>
              Oomapas Nogales
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
                  className='w-full text-xl p-2 border-b-1 border-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Ingrese su usuario'
                  required

                />
              </div>

              <div>
                <input
                  type='password'
                  id='password'
                  className='w-full text-xl p-2 border-b-1 border-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Ingrese su contraseña'
                  required

                />
              </div>

              <button
                type='submit'
                className='md:w-1/3 w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export { SignIn }
