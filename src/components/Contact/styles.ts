import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    margin-bottom: 4rem;
    
    h2{
      text-align: center;
      font-size: 4rem;
      color: var(--green);
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    p{
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      font-size: 1.6rem;
      margin-top: 0.5rem;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
    
    .contact-link{
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 200px;
        padding: 2.5rem 2rem;
        background: linear-gradient(135deg, rgba(35, 206, 107, 0.1) 0%, rgba(1, 111, 185, 0.1) 100%);
        border-radius: 1.5rem;
        border: 2px solid rgba(35, 206, 107, 0.3);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none;
        
        img{
          width: 5rem;
          height: 5rem;
          /* Removed filter to show original icon colors */
          transition: all 0.3s ease;
        }
        
        span{
          color: #fff;
          font-weight: 600;
          font-size: 1.8rem;
          transition: color 0.3s ease;
        }
        
        &:hover{
          transform: translateY(-8px);
          border-color: var(--green);
          background: linear-gradient(135deg, rgba(35, 206, 107, 0.2) 0%, rgba(1, 111, 185, 0.2) 100%);
          box-shadow: 0 10px 30px rgba(35, 206, 107, 0.3);
          animation: ${pulse} 2s ease-in-out infinite;
          
          img{
            transform: scale(1.2);
            filter: drop-shadow(0 0 12px var(--green));
          }
          
          span{
            color: var(--green);
          }
        }
      }
    }
  }

  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      gap: 2rem;
      
      .contact-link{
        width: 100%;
        max-width: 300px;
        
        a{
          width: 100%;
        }
      }
    }
  }
  
  @media(max-width: 480px){
    header h2 {
      font-size: 3rem;
    }
    
    .contacts .contact-link a {
      padding: 2rem 1.5rem;
      
      img {
        width: 4rem;
        height: 4rem;
      }
      
      span {
        font-size: 1.6rem;
      }
    }
  }
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
