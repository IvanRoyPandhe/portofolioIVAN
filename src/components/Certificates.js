import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CertificatesSection = styled.section`
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

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const CertificateCard = styled(motion.div)`
  position: relative;
  cursor: default;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &:hover {
    transform: translateY(-7px);
  }
`;

const CertificateInner = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 0 0 1.5rem 0;
  border-radius: 4px;
  background-color: #112240;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow: hidden;
`;

const CertificateImage = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.25s ease;
  }
`;

const CertificateTitle = styled.h3`
  margin: 0 0 10px;
  color: #e6f1ff;
  font-size: 22px;
  padding: 0 1.75rem;
`;

const CertificateIssuer = styled.h4`
  color: #64ffda;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 20px;
  padding: 0 1.75rem;
`;

const CertificateDate = styled.p`
  color: #a8b2d1;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px;
  margin: 0;
  padding: 0 1.75rem;
`;

const CertificateDescription = styled.div`
  color: #a8b2d1;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 0 1.75rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border: 2px solid #64ffda;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: #e6f1ff;
  font-size: 24px;
  cursor: pointer;
  
  &:hover {
    color: #64ffda;
  }
`;

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const certificates = [
    {
      title: 'Competency Test Certification',
      issuer: 'SMK NEGERI 1 Prigen',
      date: '2023',
      description: 'Design wired and wireless-based networks with VLAN and Routing implementation.',
      image: '/images/certificates/network-cert.jpg'
    },
    {
      title: 'AWS CendikiAwan Certification',
      issuer: 'MSIB 7 PT TIM with Amazon Web Services',
      date: '2023',
      description: 'Cloud Architecture certification from AWS CendikiAwan program, demonstrating knowledge of AWS cloud services and architecture design.',
      image: '/images/certificates/aws-cert.jpg'
    },
    {
      title: 'English Course Certificate',
      issuer: 'The Eagle English Course & Interpeace',
      date: '2023',
      description: 'Completed English language proficiency course in Pare, enhancing communication skills for professional environments.',
      image: '/images/certificates/english-cert.jpg'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <CertificatesSection id="certificates">
      <Container>
        <SectionTitle>
          <span>04.</span> Certifications
        </SectionTitle>
        
        <CertificatesGrid>
          {certificates.map((certificate, i) => (
            <CertificateCard
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificateInner>
                <CertificateImage onClick={() => openModal(certificate.image)}>
                  <img src={certificate.image} alt={certificate.title} />
                </CertificateImage>
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateIssuer>{certificate.issuer}</CertificateIssuer>
                <CertificateDescription>{certificate.description}</CertificateDescription>
                <CertificateDate>{certificate.date}</CertificateDate>
              </CertificateInner>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </Container>
      
      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <CloseButton onClick={closeModal}>×</CloseButton>
              <img src={selectedImage} alt="Certificate" />
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </CertificatesSection>
  );
};

export default Certificates;