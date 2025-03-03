"use client"
import LandingHero from "@/Components/Hero";
import PricingMarketing from "@/Components/pricing";
import { HEADER } from "@/config-global";
import Header from "@/Header";
import { Box, Typography ,useTheme} from "@mui/material";

import { _pricingMarketing } from "@/_mock";
import MarketingLandingFaqs from "@/Components/FAQ";
import Summary from "@/Components/Summary";
import Steps from "@/Components/Steps";
import Connections from "@/Components/Connections";
;import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { _brands } from "@/_mock";
import Footer from "@/Components/Footer";
export default function Home() {
  const theme=useTheme();
  // const { pathname } = useRouter();
  return (

    <Box bgcolor={theme.palette.background.neutral} sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {/* <Header/> */}

      <Box
      // bgcolor={theme.palette.background.neutral}
        // component="main"
        sx={{
          flexGrow: 1,
        }}
      >
           <div id="/">
        <LandingHero />
        </div>
    
        <Summary/>
        
        <Connections brands={_brands}/>
        <div id="summary">
        <Steps/>
        </div>
        <div id="Apply">
        <PricingMarketing/>
        </div>
        <div id="FAQ">
        <MarketingLandingFaqs/>
</div>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', height: 1000 }}></Box> */}
      </Box>
 
      <Footer />
    </Box>
  );
}
