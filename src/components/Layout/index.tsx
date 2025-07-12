import { Link, Outlet } from 'react-router-dom'

import { PiPhoneCallBold } from 'react-icons/pi'
import { TbSettingsBolt } from 'react-icons/tb'
import { TfiHelpAlt } from "react-icons/tfi"

// PiMicrosoftExcelLogoBold


function Layout() {
  return (
    <>
      <header className='bg-Secondary text-white py-3'>
        <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between px-7 items-center'>
          <div className=''>
            <Link to='/' className='flex items-center'>
              <img src='./logooomapasBlanco.png' alt='Logo' className='h-16' />
            </Link>
          </div>
          <div>
            <nav className='flex space-x-10'>
              <Link to='/' className='flex flex-col items-center justify-center text-2xl hover:text-Primary dark:hover:text-PrimaryDark'>
                <PiPhoneCallBold className='text-3xl' />
                <span className='text-xs'>Llamadas</span>
              </Link>

              {/* <Link to='/' className='flex flex-col items-center justify-center text-2xl hover:text-Primary dark:hover:text-PrimaryDark'>
                <PiMicrosoftExcelLogoBold className='text-3xl' />
                <span className='text-xs'>Excel</span>
              </Link> */}
              <Link to='/ayuda' className='flex flex-col items-center justify-center text-2xl hover:text-Primary dark:hover:text-PrimaryDark'>
                <TfiHelpAlt className='text-3xl' />
                <span className='text-xs'>Ayuda</span>
              </Link>

              <Link to='/' className='flex flex-col items-center justify-center text-2xl hover:text-Primary dark:hover:text-PrimaryDark'>
                <TbSettingsBolt className='text-3xl' />
                <span className='text-xs'>Configuración</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section className='max-w-screen-2xl mx-auto my-5'>
        <Outlet />
      </section>
    </>
  )
}
export { Layout }