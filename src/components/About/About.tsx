import { useEffect, useRef } from "react";
import { Container } from "./styles";
import { gsap } from "gsap";

export function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      const elements = [
        titleRef.current,
        p1Ref.current,
        p2Ref.current,
        p3Ref.current,
        educationRef.current,
        visualRef.current
      ].filter(Boolean);

      // Use IntersectionObserver for scroll-based animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                elements,
                { opacity: 0, x: -30 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: "power3.out"
                }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(aboutRef.current);
    }
  }, []);

  return (
    <Container id="about" ref={aboutRef}>
      <div className="about-text">
        <h2 ref={titleRef}>About me</h2>
        <p ref={p1Ref}>
          Hello! I'm Ridhima Chaturvedi, a pre-final year student passionate about technology and innovation. I'm currently pursuing my degree while actively exploring the realms of web development and artificial intelligence.
        </p>
        <p ref={p2Ref} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          My journey in tech has been driven by curiosity and a desire to create meaningful solutions. I enjoy building interactive web applications, experimenting with modern frameworks, and diving deep into the fascinating world of prompt engineering and AI.
        </p>
        <p ref={p3Ref}>
          When I'm not coding, you'll find me learning new technologies, contributing to open-source projects, or working on personal projects that challenge me to grow. I believe in continuous learning and staying updated with the latest trends in the tech industry.
        </p>
        <div ref={educationRef} className="education">
          <h3>Education:</h3>
          <h4>Bachelor's Degree (Pre-Final Year)</h4>
          <p>Currently pursuing my undergraduate studies</p>
          <p>Focusing on Computer Science & Web Development</p>
        </div>
      </div>
      <div ref={visualRef} className="about-visual">
        <div className="code-animation">
          <div className="code-line"></div>
          <div className="code-line"></div>
          <div className="code-line"></div>
        </div>
      </div>
    </Container>
  )
}
