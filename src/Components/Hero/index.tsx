import { useState } from 'react';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import {
  Fab,
  Typography,
  Stack,
  Container,
  Box,
  Divider,
  Button,
  useMediaQuery,
//    Grid,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

// utils

import { bgGradient } from '@/utiles/cssStyles';
// import { fShortenNumber } from 'src/utils/formatNumber';
// hooks
// import useResponsive from 'src/hooks/useResponsive';

import _mock from '@/_mock';
// assets
// import ElearningHeroIllustration from '@/src/assets/illustrations/ElearningHeroIllustration';
import ElearningHeroIllustration from '../../assets/illustrations/ElearningHeroIllustration';
// components
// import Iconify from 'src/components/iconify';
import Iconify from '../iconify';
// import { PlayerDialog } from 'src/components/player';
import { PlayerDialog } from '../player';
import { HEADER } from '@/config-global';
import ReactPlayer from 'react-player';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Learners', color: 'warning' },
  { value: 1050, label: 'Courses', color: 'error' },
  { value: 59000, label: 'Graduates', color: 'success' },
] as const;

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.8),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
  
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const isMdUp = true;
const theme=useTheme();

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const edge1Ref = useRef(null);
  const middleRef = useRef(null);
  const edge2Ref = useRef(null);
  const allWordsRef = useRef([]);

  const secureRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);
  const authRef = useRef(null);
  const trustRef = useRef(null);
  const middleContainerRef = useRef(null);

  useEffect(() => {
    // Initially set up the middle words to be hidden except for "Authenticate", which forms the initial sentence
    gsap.set([word1Ref.current, word2Ref.current, word3Ref.current], { opacity: 0, y: 0 });
    gsap.set(authRef.current, { opacity: 1, y: 0 });

    // Position edge words to form a readable sentence initially
    gsap.set(secureRef.current, { x: -20 });
    gsap.set(trustRef.current, { x: 20 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Edge words move apart with a smaller distance for a reduced gap
    tl.to(secureRef.current, {
      x: -60,
      duration: 0.8,
      ease: 'power3.out',
    }, 0)
    .to(trustRef.current, {
      x: 60,
      duration: 0.8,
      ease: 'power3.out',
    }, 0);

    // Start scrolling middle words immediately as edge words scatter
    tl.to(word1Ref.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.inOut',
    }, 0) // Start at the same time as edge words scatter
    .to(authRef.current, {
      opacity: 0, // Hide "Authenticate" to make way for "Identity"
      duration: 0,
      ease: 'power2.inOut',
    }, 0)
    .to(word1Ref.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.inOut',
    }, '+=0.05');

    tl.to(word2Ref.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.inOut',
    }, '-=0.1')
    .to(word2Ref.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.inOut',
    }, '+=0.05');

    tl.to(word3Ref.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.inOut',
    }, '-=0.1')
    .to(word3Ref.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.inOut',
    }, '+=0.05');

    tl.to(authRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.inOut',
    }, '-=0.1')
    .to(authRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.inOut',
    }, '+=0.05');

    // When "Authenticate" appears, edge words bounce back in
    tl.to(authRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.inOut',
    })
    .to(secureRef.current, {
      x: -40,
      duration: 0.8,
      ease: 'power3.inOut',
    }, '<')
    .to(trustRef.current, {
      x: 40,
      duration: 0.8,
      ease: 'power3.inOut',
    }, '<');

    // Small delay before restarting the loop
    tl.to({}, { duration: 5 });// Adjust this duration to control the time before the loop restarts

    return () => tl.kill();
  }, [])
  return (
    <>
      {/* <Box
    bgcolor={ theme.palette.background.neutral}
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP ,backgroundColor: theme.palette.background.neutral,},
      }}
    /> */}
      <StyledRoot>
        <Container
          sx={{
            marginTop:8,
            py: 15,
            // backgroundColor: theme.palette.background.neutral,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
          }}
        >
     <Grid container >
  <Grid size={{ xs: 12, md: 6,lg:6 }}>
    <Stack
      sx={{
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      {/* <Typography variant="h2">
        Secure
        <Box component="span" sx={{ color: 'text.disabled' }}>
          {` Digital `}  
        </Box>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
          {` Transactions `}  
        </Box>
        With PKI Technology
      </Typography> */}


<Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        ml: { xs: 5, md: 5 },
        // minHeight: '100vh',
        // backgroundColor: '#F3F4F6',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <Typography
          ref={secureRef}
          variant="h3"
          sx={{ fontWeight: 'bold' }}
        >
          Empower
        </Typography>
        <Box
          ref={middleContainerRef}
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px', // Adjusted for PKI-related words
          }}
        >
          <Typography
            ref={word1Ref}
            variant="h3"
            sx={{
              color: 'primary.main',
              position: 'absolute',
              fontWeight: 'bold',
            }}
          >
            Innovation
          </Typography>
          <Typography
            ref={word2Ref}
            variant="h3"
            sx={{
              color: 'primary.main',
              position: 'absolute',
              fontWeight: 'bold',
            }}
          >
            Security
          </Typography>
          <Typography
            ref={word3Ref}
            variant="h3"
            sx={{
              color: 'primary.main',
              position: 'absolute',
              fontWeight: 'bold',
            }}
          >
            Digital
          </Typography>
          <Typography
            ref={authRef}
            variant="h3"
            sx={{
              color: 'primary.main',
              position: 'absolute',
              fontWeight: 'bold',
            }}
          >
            Technology
          </Typography>
        </Box>
        <Typography
          ref={trustRef}
          variant="h3"
          sx={{ fontWeight: 'bold' }}
        >
          Ethiopia
        </Typography>
      </Box>
    </Box>
      <Typography sx={{ color: 'text.secondary', mt: 3, mb: 5 }}>
        Ensure trust, authentication, and encryption in Ethiopia’s digital ecosystem with  
        **Public Key Infrastructure (PKI)**—the backbone of secure online interactions.
      </Typography>


      <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        {/* <Button color="inherit" size="large" variant="contained">
          Get Started
        </Button> */}
        <Box
                    sx={{
                      width: isSmallScreen ? '100%' : '300px',
                      mt: 3,
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=ifbNTOzt1EY" // Replace with your YouTube video URL
                      width="100%"
                      height={isSmallScreen ? '200px' : '100%'}
                      controls
                      onClick={handleOpenVideo}
                      style={{ cursor: 'pointer' }}
                    />
                  </Box>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />


    </Stack>
  </Grid>

  {isMdUp && (
    <Grid size={{ xs: 12, md: 6,lg:6 }} 
    >
 
      <ElearningHeroIllustration />
    </Grid>
  )}
</Grid>

      
        </Container>
      </StyledRoot>

      <PlayerDialog open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video(0)} />
    </>
  );
}
