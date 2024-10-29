import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Counter from './components/Counter'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Name/>
      <Routes>
        <Route path='/s' element={<Statebasic/>}/>
        <Route path='/c' element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App
