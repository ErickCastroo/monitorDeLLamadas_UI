import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Home } from '@/view/Home'
import { SignIn } from '@/view/SignIn'
import { SignUp } from '@/view/SignUp'
import { Help } from '@/view/Help'

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} index />
          <Route path='/ayuda' element={<Help />} />
          <Route path='*' element={<h1 className='text-9xl text-purple-600'>404 Not Found</h1>} />
        </Route>
        <Route>
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Rutas }