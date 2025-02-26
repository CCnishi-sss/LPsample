import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background: ${({ theme }) => theme.colors.homeBg};
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 16%;
  opacity: 0.8;
`;

const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  opacity: 0.3;
`;

const HomeTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src="/images/tree.jpg" alt="Tree Background" />
      <Logo src="/images/logo.png" alt="Logo" />
      <HomeTitle>Build to Grow,</HomeTitle>
      <HomeTitle>Designed to Evolve</HomeTitle>
    </HomeContainer>
  );
};

export default Home;

