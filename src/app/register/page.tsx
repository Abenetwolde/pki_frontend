"use client"
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography, Box } from '@mui/material';
import { AuthCarousel, AuthRegisterForm} from '@/Components/auth'
;import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// ----------------------------------------------------------------------

export default function RegisterCoverView() {
  return (
    <Stack direction="row" sx={{ minHeight: 1 }}>
      <Box
        sx={{
          width: { xs: 1, md: 580 },
          p: (theme) => ({
            xs: theme.spacing(5, 2),
            md: theme.spacing(8, 10),
          }),
        }}
      >
        {/* <Logo /> */}
        <p>PKI Logo</p>

        <Stack
          sx={{
            pb: 5,
            pt: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h3" paragraph>
            Get Started
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`Already have an account? `}
            <Link href="/login" variant="subtitle2" color="primary">
              Login
            </Link>
          </Typography>
        </Stack>

        {/* <AuthWithSocial /> */}

        <Divider sx={{ py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            OR
          </Typography>
        </Divider>

        <AuthRegisterForm />
      </Box>

      <AuthCarousel
        title={`Secure Digital Transactions \n With PKI Technology`}
        images={[
          '/assets/background/1.jpeg',
       '/assets/background/2.jpeg',
        ]}
      />
    </Stack>
  );
}
