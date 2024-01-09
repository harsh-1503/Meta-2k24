import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 65%;
  display: flex;
  align-items: center;
  background-color: rgba(36, 36, 36, 0);
  color: rgba(255, 255, 255, 0.3);
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  padding: 10px;

  @media (min-width: 768px) {
    width: 65%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0 10px;
  font-size: 36px;
  transition: font-size 0.5s ease-in-out, color 0.5s ease-in-out, margin 0.5s ease-in-out;

  &:hover {
    color: #fff;
  }

  &.active {
    font-size: 60px;
    color: rgba(255, 255, 255, 1);
    margin: 0 15px;
  }

  @media (min-width: 768px) {
    font-size: 70px;
    &.active {
      font-size: 120px;
    }
  }

  @media (max-width: 425px) {
    font-size: 24px; /* Adjust font size for screens with width <= 425px */
    &.active {
      font-size: 40px; /* Adjust font size for screens with width <= 425px */
    }
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavLink to="/" className={location.pathname === '/' && 'active'}>
        Home
      </NavLink>
      <NavLink to="/docker" className={location.pathname === '/docker' && 'active'}>
        Docker
      </NavLink>
      <NavLink to="/go" className={location.pathname === '/go' && 'active'}>
        Go
      </NavLink>
      <NavLink to="/register" className={location.pathname === '/register' && 'active'}>
        Register
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;