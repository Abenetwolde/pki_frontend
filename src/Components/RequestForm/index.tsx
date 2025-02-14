"use client"
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { useGetFormByIdQuery } from '@/app/api';
// @mui

import { Box, Typography, TextField } from '@mui/material';
import FormProvider from '../hook-form/FormProvider';
import { RHFTextField } from '../hook-form';
import { LoadingButton, Skeleton } from '@mui/lab';
// ----------------------------------------------------------------------

type FormField = {
  field_id: number;
  form_id: number;
  field_name: string;
  field_type: string;
  is_required: boolean;
  created_at: string;
  updated_at: string;
};

type FormData = {
  form_id: number;
  org_id: number;
  name: string;
  created_at: string;
  updated_at: string;
  form_fields: FormField[];
};

export default function RequestForm() {
  const { data, error,isLoading } = useGetFormByIdQuery(1);
  const [formSchema, setFormSchema] = useState<Yup.ObjectSchema<any>>({});
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});

  useEffect(() => {
    if (data) {
      const formFields: FormField[] = data?.form_fields;
      const schema: Record<string, any> = {};
      const defaults: Record<string, any> = {};

      formFields.forEach((field) => {
        schema[field.field_name] = field.field_type === 'number'
          ? Yup.number().required(`${field.field_name} is required`)
          : Yup.string().required(`${field.field_name} is required`);
        defaults[field.field_name] = '';
      });

      setFormSchema(Yup.object().shape(schema));
      setDefaultValues(defaults);
    }
  }, [data]);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: Record<string, any>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATAssssssssssss', data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <Box padding={5}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          <Skeleton height={40} width="60%" />
        </Typography>
        <Box
          rowGap={2.5}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          {[...Array(6)].map((_, index) => (
            <Box key={index}>
              <Skeleton width="40%" height={40} />
              <Skeleton variant="rectangular" height={56} />
            </Box>
          ))}
        </Box>
        <Skeleton  width="20%" variant="rectangular" height={56} sx={{ mt: 5 }} />
      </Box>
    );
  }

  if (error) return <div>Error loading form</div>;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {data?.name}
      </Typography>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
         {data?.form_fields.map((field: FormField) => (
          <RHFTextField
            key={field.field_id}
            name={field.field_name}
            label={field.field_name}
            type={field.field_type}
            required={field.is_required}
            fullWidth
          />
        ))}
      </Box>
<Box sx={{ mt: 3 }}>
<LoadingButton
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Register
      </LoadingButton>
</Box>
      
    </FormProvider>
  );
}