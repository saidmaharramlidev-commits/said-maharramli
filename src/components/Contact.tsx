import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TbBrandFiverr } from "react-icons/tb";
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from 'react-redux';
import { setFormLoading, setFormSubmitted } from '../redux/counterSlice';
import type { RootState } from '../redux/store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useFormik } from 'formik'
import { formScheme } from '../schemes/formScheme';

export function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color='inherit' />
        </Box>
    );
}



const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    // Input text color
                    "& .MuiInputBase-input": {
                        color: "#ffffff",
                    },

                    // Label color
                    "& .MuiInputLabel-root": {
                        color: "#ffffff",
                    },

                    // Label when focused
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#ffffff",
                    },

                    // Border default
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                    },

                    // Border hover
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                    },

                    // Border focused
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                    },
                },
            },
        },
    },
});




function Contact() {
    const dispatch = useDispatch()
    const { formLoading, isFormSubmitted } = useSelector((state: RootState) => state.counter)



    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            message: "",
        },
        validationSchema: formScheme,
        onSubmit: async (values, { resetForm }) => {
            try {
                dispatch(setFormLoading(true))

                await emailjs.send(
                    "service_1aqxvhr",
                    "template_3rr9ppl",
                    values,
                    "APbIS8y8JO1vQN1hk"
                )

                dispatch(setFormSubmitted(true))
                resetForm()

            } catch (error) {
                console.error(error)
            } finally {
                dispatch(setFormLoading(false))
                setTimeout(() => {
                    dispatch(setFormSubmitted(false))
                }, 3000)
            }
        }
    })


    return (

        <div id="mainContact">
            <h1 id="headerOfContact">Contact</h1>
            <div id="contact-wrapper">
                <div id="leftContact">
                    <h1>Let’s Work Together</h1>
                    <p style={{ color: "silver" }}>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out — let’s build something meaningful together.</p>
                    <div id="socialMediaOfContact">
                        <div className='contactSocialMedia'>
                            <a href="https://www.instagram.com/developer_said/"><InstagramIcon className='iconContact' /> <span>Instagram</span></a>
                        </div>
                        <div className='contactSocialMedia'>
                            <a href="https://github.com/saidmaharramlidev-commits"><GitHubIcon className='iconContact' /><span> Github</span></a>
                        </div>
                        <div className='contactSocialMedia'>
                            <a href="https://www.fiverr.com/saidmaharramli/buying?source=avatar_menu_profile"><TbBrandFiverr style={{ width: "23px", height: "23px", backgroundColor: "#1B1B20", borderRadius: "5px", padding: "10px" }} /> <span>Fiverr</span></a>
                        </div>

                    </div>
                </div>
                <div id="form-wrapper">
                    <div id='contact-form'>
                        <ThemeProvider theme={theme}>

                            <form onSubmit={formik.handleSubmit} id='textFields'>
                                <TextField
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    label="Name" type='text' sx={{ width: "90%" }} />

                                <TextField
                                    name='surname'
                                    value={formik.values.surname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                                    helperText={formik.touched.surname && formik.errors.surname}
                                    label="Surname" type='text' sx={{ width: "90%" }} />

                                <TextField
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Email" type='email' sx={{ width: "90%" }} />

                                <TextField
                                    name='message'
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                    rows={4} multiline
                                    label="Message"
                                    type='text'
                                    sx={{ width: "90%" }} />

                                <Button
                                    id='ctaOfContact'
                                    type="submit"
                                    variant="contained"
                                    sx={{ backgroundColor: "white", color: "black" }}
                                >
                                    {formLoading ? (
                                        <CircularIndeterminate />
                                    ) : isFormSubmitted ? (
                                        <span style={{ color: "green" }}>Form successfully sent</span>
                                    ) : (
                                        "Submit Form"
                                    )}
                                </Button>
                            </form>


                        </ThemeProvider>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact