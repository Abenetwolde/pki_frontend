"use client"
import { useEffect, useRef } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Iconify from '../iconify';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    title: 'Create an Account',
    description: 'Register on the PKI platform to start the certificate issuance process.',
    icon: 'mdi:account-plus-outline',
  },
  {
    title: 'Select Certificate Type',
    description: 'Choose the appropriate digital certificate based on your organization’s needs.',
    icon: 'mdi:certificate-outline',
  },
  {
    title: 'Submit a Request',
    description: 'Fill out the certification request form and provide necessary identity details.',
    icon: 'mdi:form-textbox',
  },
];

export default function Steps() {
  const containerRef = useRef(null);
  const stepBoxesRef = useRef([]);

  useEffect(() => {
    stepBoxesRef.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.to(box, {
        // boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        scale: 1.03,
        duration: 0.5,
        scrollTrigger: {
          trigger: box,
          start: 'top center',
          toggleActions: 'play reverse play reverse',
        },
      });
    });
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        textAlign: 'center',
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        bgcolor: 'transparent',
      }}
    >
      <Container>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          PKI Process
        </Typography>

        <Typography variant="h2" sx={{ my: 3 }}>
          Get Your Digital Certificate
        </Typography>

        <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
          Follow these simple steps to obtain a trusted digital certificate for secure communication and authentication.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            my: { xs: 8, md: 10 },
            gap: { xs: 8, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {STEPS.map((value, index) => (
            <div
              key={value.title}
              className="step-box"
              ref={(el) => (stepBoxesRef.current[index] = el)}
              style={{
                border: '2px solid rgba(0,0,0,0.05)',
                borderRadius: '12px',
                padding: '20px',
                backgroundColor: 'white',
                transition: 'all 0.4s ease-in-out',
              }}
            >
              <Iconify icon={value.icon} width={64} height={64} sx={{ mb: 3, mx: 'auto', color: 'primary.main' }} />

              <Typography variant="overline" sx={{ mt: 4, display: 'block', color: 'text.disabled' }}>
                Step {index + 1}
              </Typography>

              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                {value.title}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </div>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          color="inherit"
          startIcon={<Iconify icon="mdi:file-key-outline" />}
        >
          Start Registration
        </Button>
      </Container>
    </Box>
  );
}
