"use client"
import LandingHero from "@/Components/Hero";
import { HEADER } from "@/config-global";
import Header from "@/Header";
import { Box, Typography ,useTheme} from "@mui/material";
import Image from "next/image";
// import { useRouter } from 'next/navigation';
export default function Home() {
  const theme=useTheme();
  // const { pathname } = useRouter();
  return (

    <Box bgcolor={theme.palette.background.neutral} sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header/>

      <Box
      // bgcolor={theme.palette.background.neutral}
        // component="main"
        sx={{
          flexGrow: 1,
        }}
      >
   
        <LandingHero />

        {/* <Box sx={{ display: 'flex', flexDirection: 'column', height: 1000 }}></Box> */}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 10 }}>
        <Typography variant="h1">Footer</Typography>
        {/* <Image src="/assets/background/overlay_1.jpg" alt="Picture of the author" width={500} height={500} /> */}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}
