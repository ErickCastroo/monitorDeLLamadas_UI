import { Llamadas } from '@/components/goodTable'

function Home() {


  return (
    <>
      <div className='max-w-screen-2xl mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Registro de llamada</h1>
        <Llamadas />
      </div>

    </>
  )
}

export { Home }
