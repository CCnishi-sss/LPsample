import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  background: ${({ theme }) => theme.colors.contactBg};
  height: 100vh;
  display: flex;
  flex-direction: row; /* 横並び */
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 5rem;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
    height: 50vh;
    width: 170%;
    left:-5%;
    }

`;

const Title = styled.h1`
  position: absolute;
  font-size: 5rem;
  color: #076FF4;
  font-family: 'Lora', serif;
  top: 1rem;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
   font-size: 3rem;
   left: 5%;
    }


`;

const WarningText = styled.p`
  font-size: 1.2rem;
  color: red;
  font-weight: bold;
  margin-top: 0.5rem;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
    position: absolute;
    font-size: 0.8rem;
    top: 20%;
    left:5%;
    }


`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 左寄せ */
  width: 40%;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
    }


`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #076FF4;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 50%; /* 画面右半分を画像エリアに */
  height: 110%;
  top: 8.3%;
  left: 50%;
  object-fit: cover; /* 画像のアスペクト比を維持 */
  @media (max-width: 1024px){
  top: 4.8%;
    }
  @media (max-width: 768px){
  height: 20%;  
  width: 100%;
  left: 0%;
  top: 62%;
  opacity: 0.5;
    }


`;

const Contact = () => {
  return (
    <ContactContainer>
      <FormContainer>
        <Title>contact</Title>
        <WarningText>※このフォームはサンプルのためメールは送れません。</WarningText>
        <Form>
          <Input type="email" placeholder="your email address" />
          <Input type="text" placeholder="your name" />
          <Input type="text" placeholder="お問い合わせ" />
          <SubmitButton type="submit">送信</SubmitButton>
        </Form>
      </FormContainer>
      <BackgroundImage src={`${process.env.PUBLIC_URL}/images/sky.jpg`} alt="BlueSky" />
    </ContactContainer>
  );
};

export default Contact;

