import { useEffect, useRef } from "react";
import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import python from "../../assets/python.svg";
import reactIcon from "../../assets/react-icon.svg";
import { gsap } from "gsap";

const skills = [
  { name: "HTML", icon: htmlIcon, color: "#E34F26" },
  { name: "CSS", icon: cssIcon, color: "#1572B6" },
  { name: "JavaScript", icon: jsIcon, color: "#F7DF1E" },
  { name: "Python", icon: python, color: "#3776AB" },
  { name: "Prompt Engineering", icon: null, color: "#8B5CF6" },
  { name: "React", icon: reactIcon, color: "#61DAFB" },
  { name: "Vite", icon: null, color: "#646CFF" },
  { name: "SQL", icon: null, color: "#336791" },
];

export function Skills() {
  const skillsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      // Use IntersectionObserver for scroll-based animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && skillsRef.current) {
              // Animate title
              if (titleRef.current) {
                gsap.fromTo(
                  titleRef.current,
                  { opacity: 0, y: -30 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out"
                  }
                );
              }

              // Animate skill cards
              const skillCards = skillsRef.current.querySelectorAll('.skill-card');
              if (skillCards.length > 0) {
                gsap.fromTo(
                  skillCards,
                  { opacity: 0, y: 50, scale: 0.8 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)"
                  }
                );
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(skillsRef.current);
    }
  }, []);

  return (
    <Container id="skills" ref={skillsRef}>
      <h2 ref={titleRef}>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-card" style={{ '--skill-color': skill.color } as React.CSSProperties}>
            <div className="skill-icon">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <div className="skill-text-icon">{skill.name.charAt(0)}</div>
              )}
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}
