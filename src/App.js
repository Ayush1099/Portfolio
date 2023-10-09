import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, Body, Wrapper } from './utils/Themes.js'
import Navbar from "./components/Navbar/Navbar.js";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Experience from "./components/Experience/Experience.js";
import Education from "./components/Education/Education.js";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={ darkTheme }>
      <Router >
        <Navbar />
        <Body>
          <About />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
