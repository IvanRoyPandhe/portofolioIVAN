import React from 'react';
import About from '../components/About';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding-top: 80px; // To account for the fixed navbar
`;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <PageContainer>
        <About />
      </PageContainer>
    </motion.div>
  );
};

export default AboutPage;