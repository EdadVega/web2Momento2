
import './App.css'
import Home from './componentes/home/Home'
import Login from './componentes/login/Login'
import Usuario from './componentes/usuario/Usuario';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
        <Route path="/home" element={<Home />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/" element={<Login />} /> {/* Ruta para la página Home */}
      </Routes>
    </Router>
    </>
  )
}

export default App
