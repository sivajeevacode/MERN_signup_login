import React from 'react'
import Register from './Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
