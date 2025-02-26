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
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const ServiceBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem;
  width: 60%;
`;
const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  opacity: 0.3;
`;


const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryText};
`;

const Works = () => {
  return (
    <WorksContainer>
    <BackgroundImage src="/images/back.png" alt="Background" />
      <Title>service</Title>
      <ServiceBox>
        <ServiceTitle>LP制作</ServiceTitle>
      </ServiceBox>
      <ServiceBox>
        <ServiceTitle>ポートフォリオ制作</ServiceTitle>
      </ServiceBox>
    </WorksContainer>
  );
};

export default Works;

