import { useEffect, useRef } from "react";
import { Container } from "./styles";
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import { Form } from "../Form/Form";
import { gsap } from "gsap";

export function Contact(){
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current.querySelector('.contacts'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return(
    <Container id="contact" ref={contactRef}>
      <header>
        <h2>Get In Touch</h2>
        <p>Let's connect and collaborate! </p>
        <p>Feel free to reach out through the form below or connect on social media.</p>
      </header>
      <div className="contacts">
        {/* UPDATE YOUR LINKEDIN PROFILE URL HERE */}
        <div className="contact-link">
          <a 
            href="https://www.linkedin.com/in/ridhima-chaturvediii"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
        {/* UPDATE YOUR GITHUB PROFILE URL HERE */}
        <div className="contact-link">
          <a 
            href="https://github.com/ridhima2030"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}