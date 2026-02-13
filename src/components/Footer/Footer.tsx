import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div className="logo">
        <span>Ridhima</span>
        <span> Chaturvedi</span>
      </div>
      <div>
        <p>
          Built with <img src={reactIcon} alt="React" /> & ❤️
        </p>
      </div>
      <div className="social-media">
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
    </Container>
  )
}
