import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background: ${({ theme }) => theme.colors.homeBg};
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1024px){
    bottom: -2rem;
    }
  @media (max-width: 768px){
    
    }
`;

const Logo = styled.img`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 16%;
  opacity: 0.8;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
    bottom: 20%;
    }


`;

const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0%;
  height: 100%;
  width: 60%;
  opacity: 0.3;
  @media (max-width: 1024px){
    width: 100%;
    top: 10%;
    opacity: 0.7;
    }
  @media (max-width: 768px){
    width: 100%;
    top: -6%;
    }

`;

const HomeTitle1 = styled.h1`
  position: absolute;
  margin-left: -65%;
  margin-top: -25%;
  font-size: 4.0rem;
  font-family: 'Lora', serif;
  color: ${({ theme }) => theme.colors.primaryText};
  @media (max-width: 1024px){
   top: 22%; 
   left: 70%;
   font-size: 7rem;
   opacity: 0.5;
    }
@media (max-width: 768px){
    font-size: 2.0rem;
    top: 20%;
    left: 72%;
    opacity: 0.9;
    }


`;
const HomeTitle2 = styled.h1`
  position: absolute;
  margin-left: -10%;
  margin-top: -10%;
  font-size: 4.0rem;
  font-family: 'Lora', serif;
  color: ${({ theme }) => theme.colors.primaryText};
  @media (max-width: 1024px){
   font-size: 6rem;
   top: 30%;
    }
  @media (max-width: 768px){
  font-size:2.3rem;  
  top: 30%;
  left: 20%;
    }
`;


const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={`${process.env.PUBLIC_URL}/images/tree.jpg`} alt="Tree Background" />
      <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
      <HomeTitle1>Build to Grow,</HomeTitle1>
      <HomeTitle2>Designed to Evolve</HomeTitle2>
    </HomeContainer>
  );
};

export default Home;

