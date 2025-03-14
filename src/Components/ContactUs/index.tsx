import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Container 
} from "@mui/material";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactSection: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    reset(); // Clear form after submission
  };

  return (
    <Container maxWidth="lg">
      <Paper  sx={{ p: 4, mt: 5, borderRadius: 3 }}>
        <Grid container spacing={10} alignItems="center">
          
          {/* Left Side: Illustration */}
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="https://img.freepik.com/free-vector/call-center-concept-illustration_114360-3430.jpg?t=st=1741960085~exp=1741963685~hmac=c98229562b2afaaf686f6bb3b065a32c9afece9a43f228a0735434b0bd115255&w=826" // Replace with actual image
              alt="Contact Illustration"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={3}>
                Feel free to contact us and we will get back to you as soon as possible.
              </Typography>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="E-mail"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  )}
                />

                <Button type="submit" variant="contained" color="primary" size="large">
                  Send
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactSection;
