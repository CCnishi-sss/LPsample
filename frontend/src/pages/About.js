import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.aboutBg};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: black;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primaryText};
  max-width: 60%;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>Build to Grow, Design to Evolve</Title>
      <Subtitle>人とAIが創る、次のステージ。</Subtitle>
      <Description>
        Co-creating with AI to build the future of new technology and design.
      </Description>
    </AboutContainer>
  );
};

export default About;

