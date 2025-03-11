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
      <Typography variant="h2">
        Secure
        <Box component="span" sx={{ color: 'text.disabled' }}>
          {` Digital `}  
        </Box>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
          {` Transactions `}  
        </Box>
        With PKI Technology
      </Typography>

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
