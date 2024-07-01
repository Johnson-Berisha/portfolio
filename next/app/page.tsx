"use client"

import Image from "next/image"
import SectionList from "@/design/components/sectionList"
import Skills from "@/design/components/skills"
import Contact from "@/design/components/contact"
// import { useRef } from "react";

export default function Home() {

// codeium is very cool and i like it so much i can't stop using it :3

/**
 * Scrolls to the specified section on the page.
 * @param {string} section - The id of the section to scroll to.
 */
function scrollToSection(section: string) {
  // Get the element with the specified id
  const sec = document.getElementById(section);

  // Check if the element exists
  if (sec) {
    // Scroll to the element with smooth behavior
    sec.scrollIntoView({ behavior: 'smooth' });
  }
}

  return (
    <main>
      <div className="header">
          <div className="logo">
            <Image width="40" height="40" src="/img/longlogo.svg" alt="" />
          </div>
          <div className="links">
            <a href="#" className="link" onClick={(event) => { event.preventDefault();  scrollToSection('homeSection')}}>
              Home
            </a>
            <a href="#" className="link" onClick={(event) => { event.preventDefault();  scrollToSection('aboutSection')}}>
              About
            </a>
            <a href="#" className="link" onClick={(event) => { event.preventDefault();  scrollToSection('skillsSection')}}>
              Skills
            </a>
          
            <a href="#" className="link bold-link" onClick={(event) => { event.preventDefault();  scrollToSection('contactSection')}}>
              Contact
            </a>
          </div>
        </div>
      <div className="home" id="homeSection">
        
        <div className="hero">
          <div className="hero-content">
            <p className="hero-small-text">Hello, I’m</p>
            <h1 className="hero-h1 hh1-1">Johnson</h1>
            <h1 className="hero-h1 hh1-2">Berisha</h1>
            <div className="blobs">
            <Image
              width="40"
              height="40"
              className="blob"
              src="/img/blob-haikei.svg"
              alt=""
            />
            <Image
              width="40"
              height="40"
              className="blob2"
              src="/img/blob2.svg"
              alt=""
            />
            </div>
          </div>
        </div>
        <div className="social">
          <div className="social-link">
            <a href="https://www.facebook.com/gjonson.berisha.1">
              <Image width="40" height="40" src="/img/facebook.svg" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="https://www.instagram.com/johnson_berisha/">
              <Image
                width="40"
                height="40"
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Instagram_Glyph_Gradient_RGB_logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="social-link">
            <a href="https://github.com/Johnson-Berisha/">
              <Image width="40" height="40" src="/img/github.svg" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="https://codepen.io/johnsonberisha">
              <Image width="40" height="40" src="/img/codepen.svg" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="https://twitter.com/BerishaGjonson">
              <Image
                className="sl-t"
                width="40"
                height="40"
                src="/img/twitter.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="smallabout">
        <div className="smallabout-content">
          <div className="sabt-smalltxt">About Me</div>
          <div className="sabt-bigtxt sabt-bt-1">
            I’m a web developer with a passion for building excellent websites,
            applications and everything in between.
          </div>
          <div className="sabt-bigtxt sabt-bt-2">
            I specialize in building and designing exceptional digital
            experiences. Currently, I’m focused on building responsive
            full-stack web applications.
          </div>
          <button className="sabt-btn" onClick={(event) => { event.preventDefault();  scrollToSection('contactSection')}}>Get In Touch</button>
        </div>
        <div className="sabt-img">
          <Image width="480" height="474" src="/img/me.jpg" alt="me!" />
        </div>
      </div>
      <div className="eam-effect">
        <div className="eam-txt1">Everything About Me</div>
        <div className="eam-dot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="black" />
          </svg>
        </div>
        <div className="eam-txt2">Everything About Me Not</div>
      </div>

      <main className="images">
        <SectionList />
        <Skills />
        <Contact />
   
      </main>
    </main>
  )
}


