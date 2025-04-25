"use client"
import { useRef, useEffect } from 'react';
import { Typography, Container, Stack, Box, useTheme } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useResponsive from '@/hooks/useResponsive';
import Iconify from '../iconify';

gsap.registerPlugin(ScrollTrigger);

const SUMMARY = [
  {
    title: 'Digital Certificates',
    description: 'Secure communication and authentication with trusted certificates.',
    icon: 'mdi:certificate',
  },
  {
    title: 'End-to-End Encryption',
    description: 'Ensure data privacy with strong cryptographic algorithms.',
    icon: 'mdi:lock-check',
  },
  {
    title: 'Identity Verification',
    description: 'Verify users and devices with PKI-based authentication.',
    icon: 'mdi:account-check-outline',
  },
];

// ----------------------------------------------------------------------

export default function Summary() {
  const isMdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const summaryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    summaryRefs.current.forEach((summary, index) => {
      if (summary) {
        gsap.fromTo(
          summary,
          { opacity: 0, y: 50, scale: 0.8, rotation: -10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: index * 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: summary,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.neutral,
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value, index) => (
            <Stack
              key={value.title}
              // ref={(el) => (summaryRefs.current[index] = el)}
              padding={4}
              alignItems="center"
              spacing={2}
              boxShadow={theme.customShadows.card}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                transformOrigin: 'center',
              }}
            >
              <Iconify icon={value.icon} width={64} height={64} sx={{ mb: 3, mx: 'auto', color: 'primary.main' }} />
              <Typography variant="h5">{value.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}