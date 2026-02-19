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
                    <p>A modern, fully responsive gym template with bold sections, training programs, services, and clear call-to-action buttons to engage and convert visitors online.</p>
                    <Button href="https://said-gym-template.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>

            </div>
            <Button id="ctaOfTemplates" variant="contained" onClick={() => navigate("/templates")} >See all templates</Button>

        </div>
    )
}

export default Templates