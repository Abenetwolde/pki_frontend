"use client"
import NextLink from 'next/link';
// @mui
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import Image from 'next/image';
import Iconify from '@/Components/iconify';
import AuthVerifyCodeForm from '@/Components/auth/AuthVerifyCodeForm';

// ----------------------------------------------------------------------

export default function VerifyCodeView() {
  return (
    <>
        <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          p: 8,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/assets/background/overlay_1.jpg)', // Add your image URL here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <Card sx={{ maxWidth: 450, width: '100%', zIndex: 1000 }}>
          <CardContent>
            
       <Image
                 alt="reset password"
                 src="/assets/icons/ic_lock_password.svg"
                 width={96}
                 height={96}
                 style={{ marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}
               />

      <Typography variant="h3">Check Your Email</Typography>

      <Typography variant="body2" sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
        We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below
        box to verify your email.
      </Typography>

      <AuthVerifyCodeForm />

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {`Don’t have a code? `}
        <Link variant="subtitle2" underline="none">
          Resend code
        </Link>
      </Typography>

      <Link
        component={NextLink}
        href={"/login"}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="carbon:chevron-left" width={16} sx={{ mr: 1 }} />
        Return to sign in
      </Link>
      </CardContent>
        </Card>
      </Box>
    </>
  );
}
