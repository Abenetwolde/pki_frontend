
import {
  Container,
  Typography,
} from '@mui/material';



export default function Footer() {
 
  const simpleFooter = (
    <Container  sx={{ py: 3,display:"flex", textAlign: 'center', justifyContent:"space-between",backgroundColor:"white", }}>
  <img src={"logo.png"} alt="logo" width="60" />
      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2025. All rights reserved
      </Typography>
    </Container>
  );


  return <footer> {simpleFooter} </footer>;
}

// ----------------------------------------------------------------------


