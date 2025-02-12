import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// @mui
import { LoadingButton } from '@mui/lab';
// import { DatePicker } from '@mui/x-date-pickers';
import { Box, Typography, Stack, IconButton, InputAdornment } from '@mui/material';
// assets
// import { countries } from 'src/assets/data';
import Iconify from '../iconify';
import FormProvider, { RHFTextField, RHFSelect } from '../hook-form';


// ----------------------------------------------------------------------

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

// ----------------------------------------------------------------------

export default function RequestForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    emailAddress: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phoneNumber: Yup.string().required('Phone number is required'),
    birthday: Yup.string().nullable(),
    gender: Yup.string().required('Gender is required'),
    streetAddress: Yup.string().required('Street address is required'),
    zipCode: Yup.string().required('Zip code is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    oldPassword: Yup.string().required('Old password is required'),
    newPassword: Yup.string().required('New password is required'),
    confirmNewPassword: Yup.string().required('Confirm new password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    // birthday: '',
    gender: '',
    streetAddress: '',
    zipCode: '',
    city: '',
    country: 'United States',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  const methods = useForm<typeof defaultValues>({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: typeof defaultValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Personal
        </Typography>

        <Box
          rowGap={2.5}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <RHFTextField name="firstName" label="First Name" />

          <RHFTextField name="lastName" label="Last Name" />

          <RHFTextField name="emailAddress" label="Email Address" />

          <RHFTextField name="phoneNumber" label="Phone Number" />

          {/* <Controller
            name="birthday"
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Birthday"
                slotProps={{
                  textField: {
                    helperText: error?.message,
                    error: !!error?.message,
                  },
                }}
                {...field}
                value={field.value}
              />
            )}
          /> */}

          <RHFSelect native name="gender" label="Gender">
            {GENDER_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </RHFSelect>

          <RHFTextField name="streetAddress" label="Street Address" />

          <RHFTextField name="zipCode" label="Zip Code" />

          <RHFTextField name="city" label="City" />
{/* 
          <RHFSelect native name="country" label="Country">
            <option value="" />
            {countries.map((country) => (
              <option key={country.code} value={country.label}>
                {country.label}
              </option>
            ))}
          </RHFSelect> */}
        </Box>

        <Stack spacing={3} sx={{ my: 5 }}>
          <Typography variant="h5"> Change Password </Typography>

          <Stack spacing={2.5}>
            <RHFTextField
              name="oldPassword"
              label="Old Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="newPassword"
              label="New Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="confirmNewPassword"
              label="Confirm New Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>

        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Save Changes
        </LoadingButton>
      </FormProvider>

  );
}
