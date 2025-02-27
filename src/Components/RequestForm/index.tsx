"use client"
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import FormProvider from '../hook-form/FormProvider';
import { RHFTextField } from '../hook-form';
import { LoadingButton, Skeleton } from '@mui/lab';
import { usePostFormRegistrationMutation } from '@/app/api';
import { toast, Toaster } from "sonner"; 
import Iconify from '../iconify';
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
  const [selectedFiles, setSelectedFiles] = useState<Record<string, File | null>>({});
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  useEffect(() => {
    if (formData) {
      const formFields: FormField[] = formData?.FormFields;
      const schema: Record<string, any> = {};
      const defaults: Record<string, any> = {};


      formFields.forEach((field) => {
        if (field.field_type === 'file') {
          defaults[field.field_name] = null;
        } else {
          schema[field.field_name] = field.field_type === 'number'
            ? Yup.number().required(`${field.field_name} is required`)
            : Yup.string().required(`${field.field_name} is required`);
          defaults[field.field_name] = '';
        }
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
  const [postFormRegistration, { isLoading, isSuccess, isError, error }] =
  usePostFormRegistrationMutation();

  const onSubmit = async (data:any) => {
    // event.preventDefault();
    setSubmissionStatus("idle"); // Reset status
    const toastId = toast.loading("Submitting your request...");
    const formDataToSend = new FormData();
    formDataToSend.append('user_id', '1');
    formDataToSend.append('request_type', 'Revocation');
    formDataToSend.append('form_id', formData.form_id.toString());
 
    Object.keys(data).forEach((key) => {
      formDataToSend.append(key, data[key]);
    });
  
    // Append file fields from selectedFiles
    Object.keys(selectedFiles).forEach((key) => {
      if (selectedFiles[key]) {
        console.log(`Appending file for ${key}:`, selectedFiles[key]);
        formDataToSend.append(key, selectedFiles[key] as File);
      }
    });
    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
    
        const response = await postFormRegistration(formDataToSend).unwrap();
        toast.dismiss(toastId);
        toast.success("Request submitted successfully!");
        setSubmissionStatus("success");
        // reset(); // Optionally reset the form
        setSelectedFiles({}); // Clear file selections
      } catch (err: any) {
        toast.dismiss(toastId);
        toast.error(`Submission failed: ${err?.data?.message || "Unknown error"}`);
        setSubmissionStatus("error");
        console.error("Form submission failed:", err);
      }
    
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files[0]);
      setSelectedFiles((prev) => ({ ...prev, [fieldName]: event.target.files[0] }));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, fieldName: string) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFiles((prev) => ({ ...prev, [fieldName]: event.dataTransfer.files[0] }));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
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
          field.field_type === 'file' ? (
            <Box key={field.field_id} sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {field?.field_name}
              </Typography>
              <Box
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "#f9f9f9",
                }}
                onDrop={(event) => handleDrop(event, field.field_name)}
                onDragOver={handleDragOver}
              >
                <Iconify icon="bx:bxs-cloud-upload" width={50} height={50} color="#666" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Drop or Select file
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Drop files here or click <strong>browse</strong> through your machine
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ mt: 2 }}
                >
                  Browse
                  <input
                    type="file"
                    multiple={true}
                    hidden
                    onChange={(event) => handleFileChange(event, field.field_name)}
                  />
                </Button>
                {selectedFiles[field.field_name] && (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Selected file: {selectedFiles[field.field_name]?.name}
                  </Typography>
                )}
              </Box>
            </Box>
          ) : (
            <RHFTextField
              key={field.field_id}
              name={field.field_name}
              label={field.field_name}
              type={field.field_type}
              required={field.is_required}
              fullWidth
            />
          )
        ))}
      </Box>

      <Box sx={{ mt: 3 }}>
        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isLoading || isSubmitting}
        >
          Register
        </LoadingButton>
      </Box>
      <Toaster position="top-right" richColors className="custom-toast" />
    </FormProvider>
  );
}
