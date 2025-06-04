import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #0a192f;
  padding: 0 2rem;
  position: relative;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  color: #e6f1ff;
`;

const Greeting = styled(motion.p)`
  color: #64ffda;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #ccd6f6;
  
  span {
    color: #64ffda;
  }
  
  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #8892b0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: #8892b0;
  max-width: 500px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    margin: 0 auto 2.5rem auto;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: transparent;
  color: #64ffda;
  padding: 0.75rem 1.5rem;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  transition: all 0.25s ease;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    order: -1;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #64ffda;
    top: 20px;
    left: 20px;
    z-index: -1;
    border-radius: 5px;
    transition: all 0.25s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    filter: grayscale(100%) contrast(1.2);
    mix-blend-mode: multiply;
    transition: all 0.25s ease;
  }
  
  &:hover {
    &:after {
      top: 15px;
      left: 15px;
    }
    
    img {
      filter: none;
      mix-blend-mode: normal;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </Greeting>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ivan <span>.</span>
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build cloud & infrastructure solutions.
          </HeroSubtitle>
          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm an IT practitioner specializing in DevOps, cloud architecture, IT infrastructure, and computer networking. 
            Currently focused on building scalable cloud systems and automating infrastructure on AWS.
          </HeroDescription>
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PrimaryButton to="/projects">View My Work</PrimaryButton>
          </HeroButtons>
        </HeroContent>
        <HeroImageContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <HeroImage>
            <img src={process.env.PUBLIC_URL + "/images/profile.png"} alt="Ivan's Profile" />
          </HeroImage>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;