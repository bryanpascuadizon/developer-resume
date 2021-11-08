import React from 'react'

//Material Ui
import { Grid, Card, Paper, Box, LinearProgress } from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../assets/css/skills.css'

const Skills = () => {
    return (
        <section className="skills-container">
            <div className="section-title">
                <h1>My Expertise</h1>
                <h2>Skills</h2>
            </div>
            <div className="sub-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper>
                            <div className="skill-title-sub-container">
                                <div className="section-one">
                                    <DesignServicesIcon />
                                </div>
                                <div className="section-two">
                                    <h3>Front-End Developer</h3>
                                    <p>3 years and 8 months</p>
                                </div>
                            </div>

                            <div className="skill-progress">
                                <Box sx={{ width: '100%' }}>
                                    <h4>HTML 5</h4>
                                    <span className="rating">9/10</span>
                                    <LinearProgress variant="determinate" value={90} />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <h4>CSS 3</h4>
                                    <span className="rating">9/10</span>
                                    <LinearProgress variant="determinate" value={90} />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <h4>Javascript</h4>
                                    <span className="rating">8/10</span>
                                    <LinearProgress variant="determinate" value={80} />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <h4>React JS</h4>
                                    <span className="rating">7/10</span>
                                    <LinearProgress variant="determinate" value={70} />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <h4>Redux / Express JS</h4>
                                    <span className="rating">7/10</span>
                                    <LinearProgress variant="determinate" value={70} />
                                </Box>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper>
                            <div className="skill-title-sub-container">
                                <div className="section-one">
                                    <CloudUploadIcon />
                                </div>
                                <div className="section-two">
                                    <h3>Back-End Developer</h3>
                                    <p>1 year and 7 months</p>
                                </div>
                            </div>

                            <div className="skill-progress">
                                <Box sx={{ width: '100%' }}>
                                    <h4>SQL</h4>
                                    <span className="rating">6/10</span>
                                    <LinearProgress variant="determinate" value={60} />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <h4>MongoDB</h4>
                                    <span className="rating">5/10</span>
                                    <LinearProgress variant="determinate" value={50} />
                                </Box>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Skills