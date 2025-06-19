import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className='bg-indigo-800 p-1'>
        <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
        </div>
      </header>
      <section className='max-w-screen-2xl mx-auto mt-10'>
        <Outlet />
      </section>
    </>
  )
}

export { Layout }