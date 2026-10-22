import { Routes, Route } from 'react-router-dom'
import './App.css'
import MenuPrincipal from './pages/MenuPrincipal'
import PresentacionEstudiante from './pages/PresentacionEstudiante'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPrincipal />} />
      <Route path="/estudiante/:nombre" element={<PresentacionEstudiante />} />
    </Routes>
  )
}

export default App