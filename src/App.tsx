import './App.css'
import Lenis from "lenis";
import { useEffect } from 'react';
import Hero from './components/Hero'
import "./css/hero.css"
import './css/animation.css'
import "./css/about.css"
import About from './components/About';

function App() {


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
      <Hero />
      <About />
    </>
  )
}

export default App
