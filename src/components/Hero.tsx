import { Button, Container, Stack } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { TbBrandFiverr } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import type { RootState } from "../redux/store";
import { setNavbar } from "../redux/counterSlice";







function Hero() {

    const { navbarOpen } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()






    return (
        <div id="mainHero">
            <Container maxWidth="lg">
                <IconButton id="menuBtn" onClick={() => dispatch(setNavbar(!navbarOpen))} >
                    {navbarOpen ? <ClearIcon sx={{ fontSize: "3.5rem" }} /> : <MenuIcon sx={{ fontSize: "3.5rem" }} />}
                </IconButton>
                <Stack spacing={10} id="navbar" direction={"row"} className={navbarOpen ? "open" : ""}>
                    <div id="endPoints">
                        <a href="#mainAbout">About</a>
                        <a href="">Projects</a>
                        <a href="">Templates</a>
                        <a href="">Get in touch</a>
                    </div>
                    <div id="socialMedia">
                        <a href="https://www.instagram.com/developer_said/"><InstagramIcon /></a>
                        <a href="https://github.com/saidmaharramlidev-commits"><GitHubIcon /></a>
                        <a href="https://www.fiverr.com/saidmaharramli/buying?source=avatar_menu_profile"><TbBrandFiverr /></a>
                    </div>
                </Stack>
                <div id="introduction">
                    <div id="textOfHero">
                        <h1>Said Maharramli</h1>
                        <p>I build modern, responsive web interfaces with clean structure and strong visual impact. Focused on performance, usability, and real-world projects.</p>
                        <Button id="heroCta">
                            See My Work {" >> "}
                        </Button>
                    </div>
                    <div id="imageOfHero">
                        <img src="../src/assets/me.jpg" alt="Said Maharramli" />
                    </div>

                </div>
            </Container>

        </div>
    )
}

export default Hero