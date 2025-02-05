import { useState } from 'react';
// @mui
import {
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Grid2 as Grid,
} from '@mui/material';

import { _faqs } from '@/_mock';
// hooks
// import useResponsive from 'src/hooks/useResponsive';
import useResponsive from '@/hooks/useResponsive';
import Iconify from '../iconify';
// import Image from '../image';
import Image from 'next/image';

// ----------------------------------------------------------------------

export default function MarketingLandingFaqs() {
  const isMdUp = useResponsive('up', 'md');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
<Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" color="text.disabled">
              FAQS
            </Typography>

            <Typography variant="h2">Frequently Asked Questions</Typography>
          </Stack>

          {_faqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.question}
              onChange={handleChangeExpanded(faq.question)}
            >
              <AccordionSummary>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>
                <Iconify
                  width={24}
                  icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                />
              </AccordionSummary>

              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {isMdUp && (
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
           <Image
  src="/assets/illustrations/illustration_faqs.svg"
  alt="FAQs Illustration"
  width={500} // Set the desired width
  height={500} // Set the desired height
/>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
