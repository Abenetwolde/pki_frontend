"use client";
import { Button, Link, Stack, Avatar, Menu, MenuItem, Divider, Typography } from "@mui/material";
import NavList from "./NavList";
import { useState } from "react";
import Iconify from "@/Components/iconify";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
// import { clearUserToken } from "@/path-to-your-userStore"; // Adjust the import path to your userStore file

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const dispatch = useDispatch(); // Initialize useDispatch to dispatch Redux actions
  const pathname = usePathname();
  // Handle opening the menu
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle navigation to dashboard
  const handleDashboard = () => {
    setAnchorEl(null); // Close the menu
    router.push("/dashboard"); // Navigate to /dashboard route
  };

  // Handle logout
  const handleLogout = () => {
    // dispatch(clearUserToken()); // Dispatch the clearUserToken action to clear Redux state and localStorage
    setAnchorEl(null); // Close the menu
    router.push("/login"); // Redirect to login page (adjust the route as needed)
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
         {/* Conditionally render NavList and Sign Up / Sign In button */}
         {pathname !== "/dashboard" && (
        <>
          {data.map((link: any) => (
            <NavList key={link.title} item={link} />
          ))}
          <Link href="/register">
            <Button variant="contained" color="inherit" rel="noopener">
              Sign Up / Sign In
            </Button>
          </Link>
        </>
      )}

      {/* Avatar with 'A' */}
      <Avatar
        sx={{ cursor: "pointer", bgcolor: "primary.main" }}
        onClick={handleAvatarClick}
      >
        A
      </Avatar>

      {/* Popup Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 2,
            minWidth: 200,
          },
        }}
      >
        {/* Dashboard Menu Item */}
        <MenuItem
          sx={{ cursor: "pointer", bgcolor: "primary.main", color: "white" }}
          onClick={handleDashboard}
        >
          <Iconify icon="material-symbols:dashboard" sx={{ mr: 2 }} />
          <Typography>Dashboard</Typography>
        </MenuItem>

        {/* Logout Menu Item */}
        <MenuItem onClick={handleLogout} sx={{ py: 1 }}>
          <Iconify icon="material-symbols:logout" sx={{ mr: 2 }} />
          <Typography>Logout</Typography>
        </MenuItem>

        {/* Divider at the bottom */}
        <Divider sx={{ my: 1 }} />
      </Menu>
    </Stack>
  );
}