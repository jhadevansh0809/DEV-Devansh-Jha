import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
