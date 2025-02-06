// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Paper, Box } from '@mui/material';
import Carousel from '../mini_compoents/carousel';
import Image from 'next/image';
// import Image from '../image';


// ----------------------------------------------------------------------

type Props = {
  brands: any;
};

export default function Connection({ brands }: Props) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Company We are Working With</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
        Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
        </Typography>
      </Stack>

      <Carousel {...carouselSettings}>
        {brands.map((brand:any) => (
          <Box key={brand.id} sx={{ px: 1.5 }}>
          <Paper
    variant="outlined"
    sx={{
      width: 156,
      height: 102,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      bgcolor: 'background.default',
    }}
  >
    <Image
      alt={brand.name}
      src={brand.image}
      width={102} // Set the desired width
      height={60} // Set the desired height
      style={{
        objectFit: 'contain',
      }}
    />
  </Paper>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}
