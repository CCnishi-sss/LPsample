import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.footerText};
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
    font-size: 0.7rem;  
    }


`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Co-creation nishi-sss</p>
      <p>Est.2025 | Designed & Developed by nishi-sss</p>
    </FooterContainer>
  );
};

export default Footer;

