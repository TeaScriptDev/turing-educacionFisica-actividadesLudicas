import { Routes, Route } from 'react-router-dom'
import './App.css'
import MenuPrincipal from './pages/MenuPrincipal'
import PresentacionEstudiante from './pages/PresentacionEstudiante'
import Error404 from './pages/Error404'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPrincipal />} />
      <Route path="/estudiante/:nombre" element={<PresentacionEstudiante />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App