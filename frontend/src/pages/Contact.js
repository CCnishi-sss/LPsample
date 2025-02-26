import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  background: ${({ theme }) => theme.colors.contactBg};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #076FF4;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;
const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  opacity: 0.3;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #076FF4;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
    <BackgroundImage src="/images/sky.jpg" alt="BlueSky" />
      <Title>contact</Title>
      <Form>
        <Input type="email" placeholder="your email address" />
        <Input type="text" placeholder="your name" />
        <Input type="text" placeholder="お問い合わせ" />
        <SubmitButton type="submit">送信</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;

