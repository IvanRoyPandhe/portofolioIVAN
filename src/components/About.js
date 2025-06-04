import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #0a192f;
`;

const Container = styled.div`
  max-width: 900px;
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 15px;
    color: #8892b0;
    font-size: 16px;
    line-height: 1.7;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SkillsContainer = styled.div`
  margin-top: 30px;
`;

const SkillCategory = styled.div`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  color: #ccd6f6;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: #64ffda;
    width: 20px;
    height: 20px;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
  
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    color: #8892b0;
    
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #64ffda;
      font-size: 14px;
      line-height: 12px;
    }
  }
`;

const AboutImage = styled.div`
  position: relative;
  max-width: 300px;
  
  .wrapper {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  
  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: #64ffda;
    
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      
      &:after {
        top: 15px;
        left: 15px;
      }
      
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    
    .img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      height: auto;
    }
    
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    
    &:before {
      top: 0;
      left: 0;
      background-color: #0a192f;
      mix-blend-mode: screen;
    }
    
    &:after {
      border: 2px solid #64ffda;
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const networkingSkills = [
    'Cisco Networking (CCNA level)',
    'Network Virtualization',
    'Linux Administration',
    'Ubuntu, Kali Linux',
    'Windows & WSL'
  ];

  const cloudSkills = [
    'AWS EC2, S3, VPC',
    'AWS Lambda, CloudFormation',
    'IAM & Security Groups',
    'Cloud Architecture Design',
    'Terraform (IaC)'
  ];

  const devOpsSkills = [
    'Docker & Docker Compose',
    'Podman',
    'Kubernetes (Minikube)',
    'CI/CD (GitHub Actions)',
    'GitLab Pipelines'
  ];

  const otherSkills = [
    'Git & Version Control',
    'Shell Scripting',
    'IAM & Security',
    'Monitoring & Logging',
    'Troubleshooting'
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>
          <span>02.</span> About Me
        </SectionTitle>
        
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AboutText>
              <p>
                I am an enthusiastic and adaptive IT practitioner with a strong focus on DevOps, 
                cloud architecture, IT infrastructure, and computer networking. I have hands-on experience in deploying 
                modern infrastructure solutions, automating workflows, and designing scalable cloud environments.
              </p>
              
              <p>
                My interests revolve around scalable systems, open-source tools, and cloud-native technologies. 
                I enjoy self-learning, building real-world projects, and sharing knowledge. I've also given 
                educational sessions on digital safety and privacy awareness to high school students.
              </p>
              
              <p>
                In addition to my technical journey, I have a growing interest in science and history books 
                written in a storytelling style, similar to Yuval Noah Harari's works.
              </p>
              
              <SkillsContainer>
                <SkillCategory>
                  <CategoryTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                    Networking & Operating Systems
                  </CategoryTitle>
                  <SkillsList>
                    {networkingSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </SkillsList>
                </SkillCategory>
                
                <SkillCategory>
                  <CategoryTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                    Cloud Computing & Infrastructure
                  </CategoryTitle>
                  <SkillsList>
                    {cloudSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </SkillsList>
                </SkillCategory>
                
                <SkillCategory>
                  <CategoryTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                    DevOps & Automation
                  </CategoryTitle>
                  <SkillsList>
                    {devOpsSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </SkillsList>
                </SkillCategory>
                
                <SkillCategory>
                  <CategoryTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                      <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path>
                      <path d="M21 12H3"></path>
                      <path d="M12 12v9"></path>
                    </svg>
                    System Administration & Tools
                  </CategoryTitle>
                  <SkillsList>
                    {otherSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </SkillsList>
                </SkillCategory>
              </SkillsContainer>
            </AboutText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutImage>
              <div className="wrapper">
                <img src="/images/profile.png" alt="Ivan" className="img" />
              </div>
            </AboutImage>
          </motion.div>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;