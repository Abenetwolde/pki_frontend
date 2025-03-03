"use client"
import { Button, Link, Stack, Avatar, Menu, MenuItem, Divider, Typography } from '@mui/material';

import NavList from './NavList';
import { useState } from 'react';
import Iconify from '@/Components/iconify';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }: any) {
  // State to manage the Menu's open/close and anchor element
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  // Handle opening the menu
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDashboard = () => {
    setAnchorEl(null); // Close the menu
    router.push('/dashboard'); // Navigate to /dashboard route

  };
  return (
    <Stack
    
      component="nav"
      direction="row"
      spacing={6}
      sx={{
        ml: 6,
        height: 1,
        ...sx,
      }}
    >
      {data.map((link:any) => (
        <NavList key={link.title} item={link} />
      ))}
          <Link href="/register">

<Button
  variant="contained"
  color="inherit"
  // href={"/register"}
  // target="_blank"
  rel="noopener"
>
Sign Up/ Sign In
</Button>
</Link>
{/* Avatar with 'A' */}
<Avatar
        sx={{ cursor: 'pointer', bgcolor: 'primary.main', color:"white" }} // Styling for the Avatar
        onClick={handleAvatarClick} // Open menu on click
      >
        A
      </Avatar>

      {/* Popup Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Position below and to the right
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 2, // Padding all over the menu
            minWidth: 200, // Minimum width for better appearance
          },
        }}
      >
        {/* Dashboard Menu Item */}
        <MenuItem    sx={{ cursor: 'pointer', bgcolor: 'primary.main', color:"white", }}  onClick={handleDashboard} >
          <Iconify icon={"material-symbols:dashboard"} sx={{ mr: 2 }} />
          <Typography>Dashboard</Typography>
        </MenuItem>

        {/* Logout Menu Item */}
        <MenuItem onClick={handleClose} sx={{ py: 1 }}>
          <Iconify icon={"material-symbols:logout"} sx={{ mr: 2 }} />
          <Typography>Logout</Typography>
        </MenuItem>

        {/* Divider at the bottom */}
        <Divider sx={{ my: 1 }} />
      </Menu>
    </Stack>
  );
}
