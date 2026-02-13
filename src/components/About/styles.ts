import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  0%, 50% {
    border-color: var(--green);
  }
  51%, 100% {
    border-color: transparent;
  }
`;

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  .about-text {
    max-width: 100%;
  }

  h2{
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 3.5rem;
    margin-top: 0rem;
    color: var(--green);
    font-weight: 700;
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    line-height: 1.8;
    opacity: 0.9;
  }

  .education {
    margin-top: 3rem;
    padding: 2rem;
    background: rgba(35, 206, 107, 0.1);
    border-left: 4px solid var(--green);
    border-radius: 0.5rem;
    
    p {
      margin-top: 0.5rem;
      font-size: 1.6rem;
    }
  }

  .about-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    position: relative;
  }

  .code-animation {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background: rgba(35, 206, 107, 0.05);
    border-radius: 1rem;
    border: 1px solid rgba(35, 206, 107, 0.2);
  }

  .code-line {
    height: 2px;
    background: linear-gradient(90deg, var(--green) 0%, transparent 100%);
    margin-bottom: 1.5rem;
    border-radius: 2px;
    animation: ${typing} 2s ease-in-out infinite;
    
    &:nth-child(1) {
      width: 80%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      width: 60%;
      animation-delay: 0.5s;
    }
    
    &:nth-child(3) {
      width: 90%;
      animation-delay: 1s;
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: left;
    gap: 4rem;
    
    .about-visual {
      height: 300px;
      margin-top: 3rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-visual {
      height: 250px;
    }
    
    h2 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.6rem;
    }
  }
`