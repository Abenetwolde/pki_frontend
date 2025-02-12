// @mui
"use client"
import { Card,  Button, Typography } from '@mui/material';
import {  Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
//
// import Image from 'src/components/image';
// import Label from 'src/components/label';
// import Iconify from 'src/components/iconify';
import Image from '../image';
import Iconify from '../iconify';
import Label from '../label';
import { useState } from 'react';
import RequestForm from '../RequestForm';

export default function PlanCard({ plan }: any) {
  const [open, setOpen] = useState(false);

  const { license, icon, options, price, caption } = plan;
console.log(`PlanCard: plan: ${JSON.stringify(plan)}`);
  const basicLicense = license === 'E-invoice';

  const starterLicense = license === 'Digital Signature';

  const premiumLicense = license === 'E-mail Security';
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(starterLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
   

      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="h4" component="div" sx={{ color: 'primary.inherit', mb: 2 }}>
            {license}
          </Typography>

        
        </div>

        <Iconify color={"primary.main"} icon={icon} width={64} />
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {caption}
      </Typography>

      <Stack spacing={2} sx={{ my: 5 }}>
        {options.map((option:any) => (
          <Stack key={option} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> {option}
          </Stack>
        ))}
      </Stack>

      <Button
        fullWidth
        size="large"
        color={'inherit'}
        variant={ 'contained'}
        onClick={handleClickOpen}
      >
        Choose Certification
      </Button>
    </Card>
 
    <Dialog fullWidth={true} fullScreen={false} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Certification Form</DialogTitle>
        <DialogContent sx={{padding:5}}>
     <RequestForm/>
        </DialogContent>
      </Dialog>
    </>
  );
}
