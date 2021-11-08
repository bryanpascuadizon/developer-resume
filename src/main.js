import React from 'react'

//Components
import Intro from './components/intro'
import Skills from './components/skills'
import EducationAndWork from './components/educationwork'
import Services from './components/services'
import Porfolio from './components/portfolio'
import Footer from './components/footer'

//Material UI
import { Container } from '@mui/material'
import './assets/css/main.css'

const Main = () => {
    return (
        <Container maxWidth="lg">
            <Intro />
            <Skills />
            <EducationAndWork />
            {/* {
            
            <Services />
            <Porfolio />
            <Footer />} */}
        </Container>

    )
}

export default Main;