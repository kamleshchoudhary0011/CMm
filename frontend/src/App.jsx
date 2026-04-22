import { useState } from 'react'

import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter , Routes , Router,Route} from "react-router-dom"
import Home from './Pages/Home'
function App() {
 

  return (
    <>
<BrowserRouter>
    <Routes>

          <Route path='/' element={<Home/>} />

    </Routes>
    
</BrowserRouter>
    </>
  )
}

export default App
