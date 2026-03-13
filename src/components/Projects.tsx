import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Cobalt from "../assets/cobalt landing.png"
import Construction from "../assets/construction.png"
import Saga from "../assets/sagaHero.png"


function Projects() {
    const navigate = useNavigate()





    return (
        <div id="mainProjects">
            <div id="headerOfSection">
                <h1 >Projects</h1>
            </div>
            <div id="projects-wrapper">
                <div className="project">
                    <img src={Construction} alt="" />
                    <h1>Construction Site</h1>
                    <p>I developed a responsive front-end recreation of the cortexconstruction.az website.This project displays my skills in component-based architecture, responsive design, and professional website structuring.</p>
                    <Button href="https://said-construction.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>
                <div className="project">
                    <img src={Saga} alt="" />
                    <h1>Saga Site</h1>
                    <p>This project is called Saga and inspired by ega.az.This project highlights my ability to build modern user interfaces using component-based architecture, implement fully responsive design principles, and structure content in a clear and scalable way</p>
                    <Button href="https://said-saga.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>
                <div className="project">
                    <img src={Cobalt} alt="" />
                    <h1>Business Landing Page</h1>
                    <p>This is my Cobalt landing page prototype template. All placeholder areas can be easily customized with your own text, images, and other information.</p>
                    <Button href="https://said-cobalt-prototype.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>

            </div>
            <Button id="ctaOfProjects" variant="contained" onClick={() => navigate("/projects")} >See all projects</Button>

        </div>
    )
}

export default Projects