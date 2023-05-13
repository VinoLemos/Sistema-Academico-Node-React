import './App.css';
import  Home  from './pages/Home/index.js'
import  Cadastro  from './pages/Cadastro/index.js'
import  Menu  from './components/Menu/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='*' element={<Menu/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
