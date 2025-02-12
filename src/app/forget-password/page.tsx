// next
"use client"
import NextLink from 'next/link';
// @mui
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
// import Image from '@/Components/image';
import Image from 'next/image';
import Iconify from '@/Components/iconify';
// import { AuthResetPasswordForm } from '../components';
import AuthResetPasswordForm from '@/Components/auth/AuthResetPasswordForm';
import { bgBlur } from '@/utiles/cssStyles';

// ----------------------------------------------------------------------

export default function ResetPasswordView() {
    return (
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
  
            <Typography variant="h3" textAlign="center" paragraph>
              Forgot Your Password?
            </Typography>
  
            <Typography textAlign="center" variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
              Please enter the email address associated with your account and We will email you a link to
              reset your password.
            </Typography>
  
            <AuthResetPasswordForm />
  
            <Link
              component={NextLink}
              href={'/login'}
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
    );
  }