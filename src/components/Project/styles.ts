import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(35, 206, 107, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(35, 206, 107, 0.6);
  }
`;

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--green);
    font-weight: 700;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .skills-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding: 2rem;
    overflow: hidden;
  }

  .skill-card{
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(35, 206, 107, 0.1) 0%, rgba(1, 111, 185, 0.1) 100%);
    border-radius: 1.5rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid rgba(35, 206, 107, 0.2);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      transform: translateY(-10px) scale(1.05);
      border-color: var(--skill-color);
      background: linear-gradient(135deg, rgba(35, 206, 107, 0.2) 0%, rgba(1, 111, 185, 0.2) 100%);
      animation: ${glow} 2s ease-in-out infinite;
      
      &::before {
        left: 100%;
      }
      
      .skill-icon {
        transform: scale(1.2) rotate(5deg);
        
        img {
          filter: drop-shadow(0 0 15px rgba(35, 206, 107, 0.6));
          transform: scale(1.1);
        }
      }
    }

    .skill-icon {
      width: 80px;
      height: 80px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.4s ease;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        /* Remove filter to show original icon colors */
        transition: filter 0.4s ease, transform 0.4s ease;
      }
      
      .skill-text-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: 700;
        color: var(--skill-color);
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        border: 2px solid var(--skill-color);
      }
    }
    
    h3{
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff;
      margin: 0;
      letter-spacing: 0.05rem;
    }
  }

  @media (max-width: 960px){
    .skills-grid{
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
    }
    
    .skill-card {
      padding: 2.5rem 1.5rem;
      
      .skill-icon {
        width: 60px;
        height: 60px;
      }
      
      h3 {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 740px){
    .skills-grid{
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      padding: 1rem;
    }
    
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
  }
  
  @media (max-width: 480px){
    .skills-grid{
      grid-template-columns: repeat(2, 1fr);
    }
    
    .skill-card {
      padding: 2rem 1rem;
      
      .skill-icon {
        width: 50px;
        height: 50px;
      }
      
      h3 {
        font-size: 1.4rem;
      }
    }
  }
`