import { Container } from "@mui/material"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { useEffect } from "react";

function About() {

    useEffect(() => {
        const leftAbout = document.getElementById("leftAbout")


        let observerOfLeft = new IntersectionObserver(([element]) => {


            if (!element.isIntersecting) return;

            element.target.classList.add("leftToRight");
            observerOfLeft.unobserve(element.target);
        })


        if (leftAbout) observerOfLeft.observe(leftAbout)

    }, [])

    useEffect(() => {
        const rightAboutUp = document.getElementById("rightAboutUp")
        const rightAboutDown = document.getElementById("rightAboutDown")


        let observerOfRight = new IntersectionObserver(([element]) => {


            if (!element.isIntersecting) return;

            element.target.classList.add("rightToLeft");
            observerOfRight.unobserve(element.target);
        })


        if (rightAboutUp) observerOfRight.observe(rightAboutUp)
        if (rightAboutDown) observerOfRight.observe(rightAboutDown)

    }, [])









    return (
        <div id="mainAbout">
            <Container className="aboutGridContainer">

                <div id="leftAbout">
                    <h1 >Who l Am</h1>
                    <ul id="leftUl">
                        <li>l am 18,living in Azerbaijan</li>
                        <li>Front-End Developer</li>
                        <li>Social Work Student</li>
                        <li>Web developer with 8 months of experience</li>
                        <br />
                        <li>
                            <strong style={{ color: "white" }}>Languages:</strong>
                            <ul id="leftLanguageUl">
                                <li style={{ paddingTop: "20px" }}>English (Conversional)</li>
                                <li>Azerbaijani (Native)</li>
                                <li>Turkish (Conversional)</li>
                            </ul>

                        </li>

                    </ul>
                    <h6 id="headOfInterestingInfo">Intersting information about
                        myself</h6>
                    <p id="aboutMeText">When I first started practicing web development, I kept asking
                        myself, ‘When will I be
                        ready?’ Every time I learned something new, it felt like there was still so much ahead of
                        me. After a while, I understood something important: I’ll
                        never feel 100% ready — and that’s
                        okay. Instead of waiting for the perfect moment, I decided
                        to start building, learning, and
                        improving step by step. Beginning before I felt ready is actually what helped me grow the
                        most.</p>

                </div>
                <div id="rightAbout">
                    <div id="rightAboutUp">
                        <h1>Tech Stack</h1>
                        <ul id="techStackUl">
                            <li><div className="skill"><FaHtml5 />  HTML</div></li>
                            <li><div className="skill"><FaCss3Alt />  CSS</div></li>
                            <li><div className="skill"><IoLogoJavascript />  Javascript</div></li>
                            <li><div className="skill"><FaReact />  React.js</div></li>
                        </ul>
                    </div>
                    <div id="rightAboutDown">
                        <h1>Services I Offer</h1>
                        <ul id="services">
                            <li>Frontend Web Development</li>
                            <li>Website Templates</li>
                            <li>UI Implementation</li>
                            <li>Landing Page Development</li>
                            <li>Responsive Optimization</li>
                            <li>Domain & Hosting Setup</li>
                        </ul>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default About