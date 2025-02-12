// next
"use client"
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography, Box } from '@mui/material';
import { AuthCarousel, AuthLoginForm} from '@/Components/auth'

// ----------------------------------------------------------------------

export default function LoginCoverView() {
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
        <p>PKI logo</p>
        {/* <Logo />
         */}

        <Stack
          sx={{
            pb: 5,
            pt: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h3" paragraph>
            Login
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`Don’t have an account? `}
            <Link
              component={NextLink}
              href={"/register"}
              variant="subtitle2"
              color="primary"
            >
              Get started
            </Link>
          </Typography>
        </Stack>

        {/* <AuthWithSocial /> */}

        <Divider sx={{ py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            OR
          </Typography>
        </Divider>

        <AuthLoginForm />
      </Box>

      <AuthCarousel
        title="Hello, Welcome Back"
    
        images={[
          '/assets/background/1.jpeg',
       '/assets/background/2.jpeg',
        ]}
      />
    </Stack>
  );
}
