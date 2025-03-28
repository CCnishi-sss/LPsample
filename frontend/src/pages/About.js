import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.aboutBg};
  /* height: 100vh; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: black;
  font-family: 'Lora', serif;
  margin-bottom: 0.5rem;
  @media (max-width: 1024px){
   position: absolute;
   font-size: 7rem; 
   top: 1%;
    }
  @media (max-width: 768px){
   position: absolute;
   font-size: 3.0rem;
   top: -3%;
   left: 5%;
    }


`;

const Subtitle = styled.h2`
  font-size: 3rem;
  font-family: 'Lora', serif;
  color: #134688;
  margin-bottom: 2rem;
  @media (max-width: 1024px){
   position: absolute;
   top: 20%; 
   font-size: 4rem;
   left: 3%;
    }
  @media (max-width: 768px){
   position: absolute;
   font-size: 1.5rem; 
   left: 5%;
   top: 10%;
    }

`;

const SelfInfo = styled.p`
  font-size: 1.5rem; /* サイズ調整 */
  font-family: 'Lora', serif;
  color: #134688;
  white-space: pre-line; /* "\n"での改行を適用 */
  margin-bottom: 2rem;
  @media (max-width: 1024px){
  position: absolute;
  top: 30%;
  font-size: 3.0rem;
    }
  @media (max-width: 768px){
   position: absolute;
   top: 20%;
   left: 5%;
   font-size: 1.5rem;
    }

`;

const Description = styled.p`
  font-size: 2rem; /* 修正：4にすると大きすぎるので調整 */
  font-family: 'Lora', serif;
  max-width: 60%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText}; /* 色を統一 */
  @media (max-width: 1024px){
    position: absolute;
    top: 30%;
    opacity:0.5;
    left: 15%;
    font-size: 6rem;
    }
  @media (max-width: 768px){
    position: absolute;
    font-size: 3rem;
    left: 5%;
    opacity: 0.3;
    top: 10%;
    }

`;
const BannerLink = styled.a`
  display: block;
  margin-top: 3rem;
  width: 100%;
  max-width: 300px;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    display: block;
    border-radius: 12px;
  }
  @media (max-width: 1024px){
    position: absolute;    
    bottom: 30%;
    right: 5%;
    width: 200%;
    }
@media (max-width: 768px){
    position:absolute;
    bottom: 40%;
    right: 5%;
    width: 65%;
    }

`;


const About = () => {
  return (
    <AboutContainer>
      <Title>About us</Title>
      <Subtitle>Build to Grow, Design to Evolve</Subtitle>
      <SelfInfo>
        Co-creating with AI to build the{"\n"}
        future of new technology and 
        design
      </SelfInfo>
      <Description>人とAIが創る、次のステージ。</Description>
      <BannerLink
        href="https://nishi-sss.github.io/Portfolio01Re/"
        target="_blank"
        rel="noopener noreferrer"
         >
        <img
          src={`${process.env.PUBLIC_URL}/images/banner.png`}
          alt="ポートフォリオはこちら！"
        />
      </BannerLink>
    </AboutContainer>
  );
};

export default About;

