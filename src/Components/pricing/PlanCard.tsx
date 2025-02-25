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
import { useEffect, useState } from 'react';
import RequestForm from '../RequestForm';
import { useGetFormsQuery } from '@/app/api';
export default function PlanCard() {
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useGetFormsQuery();
  const [selectedForm, setSelectedForm] = useState(null);


  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading data</Typography>;

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setSelectedForm(data[0]); // Set first form as default
  //   }
  // }, [data]);

  const handleClickOpen = (form:any) => {
    setSelectedForm(form);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
    {data?.map((form) => (
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(1==1 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
   

      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="h4" component="div" sx={{ color: 'primary.inherit', mb: 2 }}>
            {form?.name}
          </Typography>

        
        </div>

        <Iconify color={"primary.main"} icon={form?.icon} width={64} />
      </Stack>

    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {form?.description}
      </Typography>
   
      <Stack spacing={2} sx={{ my: 5 }}>
            {form?.FormFields.map((field) => (
              <Stack key={field.field_id} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> {field.field_name} 
              </Stack>
            ))}
          </Stack>


      <Button
        fullWidth
        size="large"
        color={'inherit'}
        variant={ 'contained'}
        onClick={() => handleClickOpen(form)}
      >
        Choose Certification
      </Button>
    </Card>
       ))}
      {selectedForm && (
        <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
          <DialogTitle>{selectedForm?.name}</DialogTitle>
          <DialogContent sx={{ padding: 5 }}>
            <RequestForm formData={selectedForm} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
