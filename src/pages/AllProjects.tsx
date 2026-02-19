import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import AfterReel from "../assets/AfterReel.png"
import Barbershop from "../assets/Barbarshop.png"
import MovieSearcher from "../assets/Movie Searcher.png"
import Cobalt from "../assets/cobalt landing.png"



function AllProjects() {

    const navigate = useNavigate()
    return (
        <div id="mainProjects">
            <div id="headerOfSection">
                <h1 >Projects</h1>
            </div>
            <div id="projects-wrapper">
                <div className="project">
                    <img src={Barbershop} alt="" />
                    <h1>Barbershop Site</h1>
                    <p>This is my site, inspired by Wayward Barbershop. Every section is fully customizable,so you can add your own text, images, and content.</p>
                    <Button href="https://said-barbershop-project.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>
                <div className="project">
                    <img src={MovieSearcher} alt="" />
                    <h1>Business Landing Page</h1>
                    <p>This is my Cobalt landing page prototype template. All placeholder areas can be easily customized with your own text, images, and other information.</p>
                    <Button href="https://said-movies-tvshows-searcher.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>
                <div className="project">
                    <img src={Cobalt} alt="" />
                    <h1>Movie/Tv show Searcher</h1>
                    <p>A web app to search, explore movies and TV series. Browse by name, genre, or IMDb rating, see detailed info and cast, and save your favorites for quick access.</p>
                    <Button href="https://said-cobalt-prototype.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>
                <div className="project">
                    <img src={AfterReel} alt="" />
                    <h1>AfterReel</h1>
                    <p>AfterReel is an interactive web app built with React and modern CSS. It asks users questions and gives ratings based on their answers, combining functionality with a clean, responsive design.</p>
                    <Button href="https://afterreel.vercel.app/" variant="contained" sx={{ backgroundColor: "darkgreen" }}>Go to project</Button>
                </div>

            </div>
            <Button id="ctaOfProjects" variant="contained" onClick={() => navigate("/")} href="#mainProjects" >Back</Button>

        </div>
    )
}

export default AllProjects