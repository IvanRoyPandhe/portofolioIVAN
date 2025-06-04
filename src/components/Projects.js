import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: #0a192f;
`;

const Container = styled.div`
  max-width: 1000px;
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

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProjectItem = styled(motion.li)`
  position: relative;
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: #112240;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #e6f1ff;
  font-size: 22px;
  margin: 0 0 15px;
`;

const ProjectDescription = styled.p`
  color: #a8b2d1;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const TechItem = styled.li`
  color: #64ffda;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px;
  background-color: rgba(100, 255, 218, 0.1);
  padding: 5px 10px;
  border-radius: 3px;
`;

const Projects = () => {
  const projects = [
    {
      title: 'AWS Cloud Infrastructure Design',
      description: 'Designed and implemented a secure, scalable multi-tier architecture on AWS. Created a network design with public and private subnets across multiple availability zones, implemented security groups and NACLs, and set up VPN connectivity for secure access.',
      tech: ['AWS VPC', 'EC2', 'Security Groups', 'Route53', 'Load Balancing', 'High Availability']
    },
    {
      title: 'Network Virtualization Lab',
      description: 'Built a comprehensive network virtualization environment using Cisco Packet Tracer. Implemented routing protocols (OSPF, BGP), VLANs, access control lists, and demonstrated failover scenarios. Created detailed documentation for educational purposes.',
      tech: ['Cisco Networking', 'OSPF', 'BGP', 'VLANs', 'ACLs', 'Network Security']
    },
    {
      title: 'CI/CD Pipeline using GitHub Actions',
      description: 'CI/CD workflow for Dockerized applications with stages for testing, building & pushing Docker images to DockerHub, and automated deployment to AWS EC2 via SSM.',
      tech: ['GitHub Actions', 'Docker', 'AWS EC2', 'SSM', 'CI/CD']
    },
    {
      title: 'Automated Server Provisioning System',
      description: 'Developed an automated server provisioning system using Ansible and Terraform. Created reusable modules for consistent server configurations, implemented automated patching and compliance checking, and integrated with monitoring systems.',
      tech: ['Ansible', 'Terraform', 'Shell Scripting', 'Linux', 'Configuration Management', 'IaC']
    },
    {
      title: 'Infrastructure as Code with Terraform',
      description: 'Designed and deployed cloud infrastructure using Terraform. Automated provisioning of EC2 instances, S3 buckets, IAM roles, and security groups. Used Terraform modules for reusable infrastructure components.',
      tech: ['Terraform', 'AWS', 'IaC', 'EC2', 'S3', 'IAM']
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>
          <span>03.</span> Some Things I've Built
        </SectionTitle>
        
        <ProjectsList>
          {projects.map((project, i) => (
            <ProjectItem
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, index) => (
                  <TechItem key={index}>{tech}</TechItem>
                ))}
              </TechList>
            </ProjectItem>
          ))}
        </ProjectsList>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;