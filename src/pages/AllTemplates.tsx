import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import GymCore from "../assets/gymCore.png"

function Templates() {
    const navigate = useNavigate()
    return (
        <div id="mainTemplates">
            <div id="headerOfTemplates">
                <h1 >Templates</h1>
            </div>
            <div id="projects-wrapper">
                <div className="project">
                    <img src={GymCore} alt="" />
                    <h1>GymCore</h1>
                    <p>GymCore is a modern and fully responsive gym website template designed to help fitness centers, gyms and workout studios present themselves online with style and clarity. It features a strong hero, sections for training programs, services and call-to-action buttons that help convert visitors into members.</p>
                    <Button href="https://said-gym-template.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>

            </div>
            <Button id="ctaOfProjects" variant="contained" onClick={() => navigate("/")} href="#mainTemplates" >Back</Button>

        </div>
    )
}

export default Templates