import { useEffect, useRef } from "react"
import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import { gsap } from "gsap"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const helloRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const resumeRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      const elements = [
        helloRef.current,
        nameRef.current,
        titleRef.current,
        resumeRef.current,
        buttonRef.current,
        socialRef.current
      ].filter(Boolean)

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        }
      )
    }
  }, [])

  return (
    <Container id="home" ref={heroRef}>
      <div className="hero-text">
        <p ref={helloRef}>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        <h1 ref={nameRef}>Ridhima Chaturvedi</h1>
        <h3 ref={titleRef}>Pre-Final Year Student</h3>
        <p ref={resumeRef} className="small-resume">Passionate about Web Development & AI</p>
        <div ref={buttonRef}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </div>
        <div ref={socialRef} className="social-media">
          {/* UPDATE YOUR LINKEDIN PROFILE URL HERE */}
          <a
            href="https://www.linkedin.com/in/ridhima-chaturvediii"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          {/* UPDATE YOUR GITHUB PROFILE URL HERE */}
          <a
            href="https://github.com/ridhima2030"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </Container>
  )
}