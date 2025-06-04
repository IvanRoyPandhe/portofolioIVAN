import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: calc(100vh - 170px);
  background-color: #0a192f;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 25px;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  color: #ccd6f6;
  
  &:after {
    content: '';
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #233554;
  }
  
  span {
    margin-right: 10px;
    color: #64ffda;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }
`;

const ResumeCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  margin-bottom: 3rem;
`;

const ResumeText = styled.p`
  color: #a8b2d1;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 1rem 1.75rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const ResumePage = () => {
  return (
    <PageContainer>
      <Container>
        <SectionTitle>
          <span>05.</span> Resume
        </SectionTitle>
        
        <ResumeCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResumeText>
            Here you can download my resume to learn more about my experience, skills, and qualifications.
          </ResumeText>
          <DownloadButton href={process.env.PUBLIC_URL + "/files/ivan-resume.pdf"} target="_blank" rel="noopener noreferrer">
            <FaFileDownload /> Download Resume
          </DownloadButton>
        </ResumeCard>
      </Container>
    </PageContainer>
  );
};

export default ResumePage;