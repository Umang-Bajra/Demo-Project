import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

import HeaderContact from './components/HeaderContact'


import HeaderMain from './components/HeaderMain'
import MainScroll from './components/MainScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderContact/> 
    <HeaderMain/>
    <MainScroll/>
    
    
    {/* <HeaderContact/> 
    <HeaderMain/>
    */}

      {/* <BrowserRouter>
      <Routes>
  
    <Route path='/' element={<HeaderComponent/>}/>
      




      </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
