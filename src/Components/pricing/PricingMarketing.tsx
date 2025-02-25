// @mui
import { Box, Stack, Switch, Container, Typography } from '@mui/material';
import PlanCard from './PlanCard';

export default function PricingMarketing({ plans }: any) {
  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Certifications
          </Typography>

          <Typography variant="h2">Check Our Certifications</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Choose the perfect certification type for .
            <br /> your needs
          </Typography>
        </Stack>

      
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
   
          <PlanCard  />
  
      </Box>
    </Container>
  );
}
