"use client"
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import FormProvider from '../hook-form/FormProvider';
import { RHFTextField } from '../hook-form';
import { LoadingButton, Skeleton } from '@mui/lab';
import { usePostFormRegistrationMutation } from '@/app/api';

// Define types
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

interface RequestFormProps {
  formData: FormData;
}

export default function RequestForm({ formData }: RequestFormProps) {
  const [formSchema, setFormSchema] = useState<Yup.ObjectSchema<any>>({});
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});

  useEffect(() => {
    if (formData) {
      const formFields: FormField[] = formData?.FormFields;
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
  }, [formData]);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const [postFormRegistration, { isLoading, error }] = usePostFormRegistrationMutation();
  const onSubmit = async (data:any) => {
    // event.preventDefault();
console.log("data..........",data)
    try {
      const formValues = data;
      const requestData = {
        request_type: 'Revocation',
        form_id: formData.form_id,
        form_data: formValues,
        csr: 'some-csr-token',  // Replace with actual CSR token
        status: 'pending',  // Or other status based on your logic
      };
      try {
        const response = await postFormRegistration(requestData).unwrap();
        console.log('Form submitted successfully:', response);
      } catch (err) {
        console.error('Form submission failed:', err);
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {formData?.name}
      </Typography>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        {formData?.FormFields?.map((field: FormField) => (
          <RHFTextField
            key={field.field_id}
            name={field?.field_name}
            label={field?.field_name}
            type={field?.field_type}
            required={field?.is_required}
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
