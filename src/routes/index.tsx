import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Home } from '@/view/Home'

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} index />
          <Route path='*' element={<h1 className='text-9xl text-purple-600'>404 Not Found</h1>} />
        </Route>

        <Route>
          <Route path='/signIn' />
          <Route path='/signUp' />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Rutas }