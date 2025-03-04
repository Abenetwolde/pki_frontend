"use client"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { LoadingButton } from '@mui/lab';
// components
import FormProvider, { RHFTextField } from '../hook-form';


// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
};

export default function AuthResetPasswordForm() {
  const router = useRouter();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('DATA', data);
      reset();
      // Redirect to the verify code page
      router.push('/verify-code');
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" hiddenLabel placeholder="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 2.5 }}
      >
        Reset Password
      </LoadingButton>
    </FormProvider>
  );
}