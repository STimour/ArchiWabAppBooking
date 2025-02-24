import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './assets/MainLayaout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            {/* <Route index element={<Accueil />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/inscritpion" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} /> */}
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
