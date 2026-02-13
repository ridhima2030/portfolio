import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: rgba(0,0,0,0);
  min-height: 80vh;
  
  .hero-text{
    flex: 1;
    max-width: 60rem;
    
    & > p{
      font-size: 1.8rem;
      margin-bottom: 1rem;
      opacity: 0.9;
    }
    
    h1{
      font-size: 7rem;
      font-weight: 700;
      /* Vibrant animated gradient - clean and visible */
      background: linear-gradient(135deg, #23ce6b 0%, #4ade80 25%, #22c55e 50%, #016fb9 75%, #23ce6b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% auto;
      animation: ${gradientShift} 5s ease infinite;
      margin-bottom: 1rem;
      line-height: 1.1;
      /* Subtle shadow for depth without glow */
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    h3{
      color: var(--green);
      margin: 1rem 0;
      font-size: 2.5rem;
      font-weight: 500;
    }

    p.small-resume {
      margin-bottom: 5rem;
      font-size: 1.6rem;
      opacity: 0.8;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 3rem;
    padding-left: 0;

    a {
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px) scale(1.1);
      }
    }

    img {
      font-size: 3rem;
      width: 3.5rem;
      height: 3.5rem;
      /* Removed filter to show original icon colors */
      transition: filter 0.3s ease, transform 0.3s ease;
      
      &:hover {
        filter: drop-shadow(0 0 10px var(--green));
        transform: scale(1.15);
      }
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    font-size: 1.6rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(35, 206, 107, 0.3);
    }
  }

  .hero-visual {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 500px;
  }

  .animated-shapes {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
  }

  .shape-1 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    top: 10%;
    right: 10%;
    animation: ${float} 6s ease-in-out infinite;
    filter: blur(40px);
  }

  .shape-2 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, var(--pink) 0%, var(--green) 100%);
    bottom: 20%;
    left: 20%;
    animation: ${pulse} 4s ease-in-out infinite;
    filter: blur(30px);
  }

  .shape-3 {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, var(--blue) 0%, var(--pink) 100%);
    top: 50%;
    right: 30%;
    animation: ${rotate} 20s linear infinite;
    filter: blur(20px);
  }

  @media(max-width: 960px){
    flex-direction: column;
    text-align: center;
    margin-top: 15%;
    
    .hero-text{
      max-width: 100%;
      
      h1{
        font-size: 5rem;
      }
      
      h3 {
        font-size: 2rem;
      }
      
      .social-media {
        justify-content: center;
      }
    }
    
    .hero-visual{
      height: 300px;
      margin-top: 4rem;
      
      .shape-1, .shape-2, .shape-3 {
        width: 120px;
        height: 120px;
      }
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
    
    .hero-text h1 {
      font-size: 4rem;
    }
  }
  
  @media(max-width: 480px){
    margin-top: 45%;
    
    .hero-text h1 {
      font-size: 3.5rem;
    }
  }
`