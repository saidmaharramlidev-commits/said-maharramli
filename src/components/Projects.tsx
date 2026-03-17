import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import TravelJoy from "../assets/traveljoy.png"
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
                    <img src={TravelJoy} alt="" />
                    <h1>TravelJoy</h1>
                    <p>TravelJoy is a modern, responsive travel website inspired by Voyalux.az, designed to showcase clean UI and smooth user experience. It highlights my frontend skills through elegant layouts, responsive design, and interactive components built with attention to detail.</p>
                    <Button href="https://said-travel-joy.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>

            </div>
            <Button id="ctaOfProjects" variant="contained" onClick={() => navigate("/projects")} >See all projects</Button>

        </div>
    )
}

export default Projects