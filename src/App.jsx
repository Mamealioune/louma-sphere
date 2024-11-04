import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './assets/Pages/Accueil';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="/" element={<Accueil />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
