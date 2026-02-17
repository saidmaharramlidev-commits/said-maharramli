import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function FAQ() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
            console.log(event)
        };









    return (
        <div id="mainFaq">
            <span id="faqTag">FAQ</span>

            <h1 id="headerOfFaq">Need to Know More?</h1>

            <div id="mainAccordion">

                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{ backgroundColor: "#121212", color: "white" }}

                >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={expanded === "panel1" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />} >
                        <Typography component="span">What kind of projects do you enjoy building?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Modern portfolio sites, fitness/gym templates, and smooth animated landing pages.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel2" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content"
                        id="panel1d-header">
                        <Typography component="span">Are you available for freelance work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Yes. I’m open to freelance projects that value clean design and modern user experience.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel3" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">What makes your work different?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            I focus on minimal design, smooth animations, and structured layouts rather than overcomplicated visuals.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel4" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">Do you provide domain and hosting services?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Yes. I can help set up domain registration and deploy your website to reliable hosting platforms like Vercel or other providers based on your project needs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel5" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">Can you work with existing projects?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Yes! I can improve, optimize, or extend existing websites without breaking the current setup.
                        </Typography>
                    </AccordionDetails>
                </Accordion>




                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel6" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">Do you offer support after a project is completed?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Yes, I provide guidance and maintenance if needed, so your website continues to run smoothly after launch.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    )
}

export default FAQ