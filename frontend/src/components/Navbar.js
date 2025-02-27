import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: ${({ theme }) => theme.colors.navbarBg};
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.navbarText};
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    opacity: 0.7;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/works">Works</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;

