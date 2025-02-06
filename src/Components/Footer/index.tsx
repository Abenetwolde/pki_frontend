
import {
  Container,
  Typography,
} from '@mui/material';

import logo from '../logo';

export default function Footer() {
 
  const simpleFooter = (
    <Container  sx={{ py: 3,display:"flex", textAlign: 'center', justifyContent:"space-between",backgroundColor:"white", }}>
      {/* <Logo  /> */}
<p>INSA Logo</p>
      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2025. All rights reserved
      </Typography>
    </Container>
  );


  return <footer> {simpleFooter} </footer>;
}

// ----------------------------------------------------------------------


