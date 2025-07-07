import { Llamadas } from '@/components/goodTable'

function Home() {


  return (
    <>
      <div className='max-w-screen-2xl mx-auto px-4 '>
        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Gestor de llamadas
        </h1>
        <Llamadas />
      </div>

    </>
  )
}

export { Home }
