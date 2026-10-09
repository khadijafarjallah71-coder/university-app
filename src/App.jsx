import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import téléchargement from './assets/téléchargement.jpg'
import './App.css'

function App() {
  const student = {
    nom: "Khadija Farjallah",
    email: "khadijafarjallah71@gmail.com",
    telephone: "26606999",
    filiere: "GLSI",
    annee: "2026-2027",
    groupe: "glsi2b1",
    ville: "Monastir"
  }

  return (
    <div>
      <img src={téléchargement} alt="Photo" className="photo" />

      <p><strong>Nom & Prénom :</strong> <span>{student.nom}</span></p>

      <p><strong>Email :</strong> <span>{student.email}</span></p>

      <p><strong>Téléphone :</strong> <span>{student.telephone}</span></p>

      <p><strong>Filière :</strong> <span>{student.filiere}</span></p>

      <p><strong>Année d'étude :</strong> <span>{student.annee}</span></p>

      <p><strong>Groupe :</strong> <span>{student.groupe}</span></p>

      <p><strong>Ville :</strong> <span>{student.ville}</span></p>
      <a href="mailto: khadijafarjallah71@gmail.com">contacter</a>
    </div>
  )
}

export default App

      

