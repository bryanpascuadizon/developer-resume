import React from 'react'

//Material Ui
import { Grid, Avatar } from '@mui/material'
import '../assets/css/intro.css'
import Homer from '../assets/images/homer.jpg'

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Intro = () => {
    return (
        <section className="introduction-container">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className="introduction-image-container">
                    <div className="sub-container">
                        <Avatar alt="Bryan Dizon" src={Homer} className="intro-avatar" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="introduction-info-container">
                    <div className="sub-container">
                        <h1>Bryan Dizon</h1>
                        <h4>Front-End Developer / UI/UX Designer</h4>
                        <h5>Seeking an innovative organization that offers career growth and a rewarding position where I can contribute my professional skills</h5>
                        <div className="intro-contact">
                            <Avatar>
                                <a href="https://www.facebook.com/bryanpascuadizon/" target="_blank"><FacebookIcon alt="Facebook Profile Page" /></a>
                            </Avatar>
                            <Avatar>
                                <a href="https://github.com/bryanpascuadizon" target="_blank"><GitHubIcon alt="Github Page" /></a>
                            </Avatar>
                            <Avatar>
                                <a href="https://www.linkedin.com/in/danielle-bryan-dizon-236861164/" target="_blank"><LinkedInIcon alt="LinkedIn Page" /></a>
                            </Avatar>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export default Intro