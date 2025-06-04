import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #0a192f;
  color: #a8b2d1;
  text-align: center;
  height: auto;
  min-height: 70px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const SocialLink = styled(motion.a)`
  padding: 10px;
  color: #a8b2d1;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover,
  &:focus {
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1;
  
  a {
    color: #64ffda;
    text-decoration: none;
    
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </SocialLink>
        
        <SocialLink 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </SocialLink>
        
        <SocialLink 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </SocialLink>
        
        <SocialLink 
          href="mailto:your.email@example.com" 
          aria-label="Email"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </SocialLink>
        
        <SocialLink 
          href="https://aws.amazon.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="AWS"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.75 9.75H5.25a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
            <path d="M6.75 18.75 5.25 12l-1.5 6.75h3Z" />
            <path d="m9.75 18.75 1.5-6.75 1.5 6.75h-3Z" />
            <path d="m16.5 18.75 1.5-6.75 1.5 6.75h-3Z" />
            <path d="M12 6v1.5" />
            <path d="M16.5 6v1.5" />
            <path d="M7.5 6v1.5" />
          </svg>
        </SocialLink>
      </SocialLinks>
      
      <Copyright>
        <div>Designed & Built by <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Ivan</a></div>
        <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;