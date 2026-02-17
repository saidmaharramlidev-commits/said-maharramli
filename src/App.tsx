import './App.css'
import Lenis from "lenis";
import { useEffect } from 'react';
import "./css/hero.css"
import './css/animation.css'
import "./css/about.css"
import "./css/projects.css"
import { Route, Routes, useNavigate } from 'react-router-dom';
import AllProjects from './components/AllProjects';
import AllTemplates from './components/AllTemplates';
import Home from './components/Home';
import "./css/templates.css"
import "./css/faq.css"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [])


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);





  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/templates' element={<AllTemplates />} />
      </Routes>

    </>
  )
}

export default App
