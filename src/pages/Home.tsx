import About from "../components/About"
import Contact from "../components/Contact"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Templates from "../components/Templates"


function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Templates />
            <FAQ />
            <Contact />

        </>
    )
}

export default Home