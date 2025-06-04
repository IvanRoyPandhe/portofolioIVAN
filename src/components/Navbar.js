import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  padding: 0 50px;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Logo = styled(Link)`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  color: #ccd6f6;
  text-decoration: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  transition: color 0.25s ease;
  position: relative;
  
  &:hover, &.active {
    color: #64ffda;
  }
  
  span {
    color: #64ffda;
    margin-right: 5px;
  }
`;

const ResumeButton = styled(Link)`
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: 15px;
  transition: all 0.25s ease;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 11;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  div {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: ${props => props.isOpen ? 'transparent' : '#64ffda'};
    transition: all 0.3s ease;
    
    &:before, &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #64ffda;
      transition: all 0.3s ease;
    }
    
    &:before {
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
    }
    
    &:after {
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  background-color: #112240;
  z-index: 10;
  padding: 100px 0;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavLink = styled(Link)`
  margin: 20px 0;
  color: #ccd6f6;
  text-decoration: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 1rem;
  
  span {
    color: #64ffda;
    margin-right: 5px;
  }
`;

const MobileResumeButton = styled(Link)`
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.7);
  z-index: 9;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    
    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, location]);

  return (
    <>
      <Nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Logo to="/">Ivan Roy Pandhe</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            <span>01.</span>Home
          </NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            <span>02.</span>About
          </NavLink>
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            <span>03.</span>Projects
          </NavLink>
          <NavLink to="/certificates" className={location.pathname === '/certificates' ? 'active' : ''}>
            <span>04.</span>Certificates
          </NavLink>
          <NavLink to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
            <span>05.</span>Resume
          </NavLink>
        </NavLinks>
        
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
        </HamburgerButton>
      </Nav>
      
      <MobileMenu isOpen={isOpen}>
        <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
          <span>01.</span>Home
        </MobileNavLink>
        <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
          <span>02.</span>About
        </MobileNavLink>
        <MobileNavLink to="/projects" onClick={() => setIsOpen(false)}>
          <span>03.</span>Projects
        </MobileNavLink>
        <MobileNavLink to="/certificates" onClick={() => setIsOpen(false)}>
          <span>04.</span>Certificates
        </MobileNavLink>
        <MobileNavLink to="/resume" onClick={() => setIsOpen(false)}>
          <span>05.</span>Resume
        </MobileNavLink>
      </MobileMenu>
      
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;