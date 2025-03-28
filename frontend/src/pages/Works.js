import React from "react";
import styled from "styled-components";

const WorksContainer = styled.div`
  background: ${({ theme }) => theme.colors.worksBg};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  position: absolute;
  font-size: 6.5rem;
  font-family: 'Lora',serif;
  margin-top: -35%;
  margin-left: -70%;
  color: ${({ theme }) => theme.colors.primaryText};
  @media (max-width: 1024px){
  position: absolute;
  font-size: 10.0rem;
  top: 40%;
  left: 80%;
  opacity: 0.5;
    }
  @media (max-width: 768px){
    font-size: 4rem;
    left: 80%;
    top: 30%;
    }


`;

const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 8%;
  height: 80%;
  opacity: 0.3;
`;


const ServiceTitle1 = styled.h2`
  position: absolute;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 3.0rem;
  font-family: 'Lora',serif;
  top: 20%;
  left: 50%;
  @media (max-width: 1024px){
   top: 30%; 
    }
  @media (max-width: 768px){
  font-size: 2.0rem;
  left: 20%;
  top: 30%;
  opacity: 0.6;
    }


`;
const ServiceTitle2 = styled.h2`
  position: absolute;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 3.0rem;
  font-family: 'Lora',serif;
  top: 40%;
  left: 50%;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
   font-size: 2.0rem;
   left: 20%;
   top: 40%;
   opacity: 0.6;
    }


`;


const Works = () => {
  return (
    <WorksContainer>
    <BackgroundImage src={`${process.env.PUBLIC_URL}/images/back.png`} alt="Background" />
      <Title>service</Title>
        <ServiceTitle1>LP制作</ServiceTitle1>
        <ServiceTitle2>ポートフォリオ制作</ServiceTitle2>
    </WorksContainer>
  );
};

export default Works;

