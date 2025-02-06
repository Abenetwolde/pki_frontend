import { useRef } from 'react';
import { Typography, Container, Stack, Box, Card, useTheme } from '@mui/material';
import useResponsive from '@/hooks/useResponsive';
import useBoundingClientRect from '@/hooks/useBoundingClientRect';
import Iconify from '../iconify';

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
const theme=useTheme()
  const containerRef :any= useRef<HTMLDivElement>(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container && container.left + 20;

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
          {SUMMARY.map((value) => (
            <Stack padding={4} key={value.title} alignItems={"center"} spacing={2} boxShadow={theme.customShadows.card}>
              {/* <SvgColor
                src={value.icon}
                sx={{ mb: 3, width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
              /> */}
              {/* <p>icon</p>
               */}
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
