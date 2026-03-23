import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import AfterReel from "../assets/AfterReel.png"
import Construction from "../assets/construction.png"
import Saga from "../assets/sagaHero.png"
import TravelJoy from "../assets/traveljoy.png"
import later from "../assets/later.png"



function AllProjects() {

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
                <div className="project">
                    <img src={AfterReel} alt="" />
                    <h1>AfterReel</h1>
                    <p>AfterReel is an interactive web app built with React and modern CSS. It asks users questions and gives ratings based on their answers, combining functionality with a clean, responsive design.</p>
                    <Button href="https://afterreel.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>
                <div className="project">
                    <img src={later} alt="" />
                    <h1>Later</h1>
                    <p>A self-initiated project built to demonstrate my frontend development skills through a clean user experience. While it explores the cost of waiting, the main focus is on performance, UI design, and turning a simple concept into a polished digital product.</p>
                    <Button href="https://said-later.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>



            </div>
            <Button id="ctaOfProjects" variant="contained" onClick={() => navigate("/")} href="#mainProjects" >Back</Button>

        </div>
    )
}

export default AllProjects