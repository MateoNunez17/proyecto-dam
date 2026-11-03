import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Boton from './components/Boton.tsx'
import Cabecera from './components/Cabecera.tsx'

function App() {
  return (
    <>
      <h1>BIENVENIDOS A TODOS</h1>
      <Boton/>
      <Cabecera/>
    </>
  )
}

export default App
