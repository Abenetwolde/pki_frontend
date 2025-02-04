import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Typography, BoxProps } from '@mui/material';
// components
// import Image from 'src/components/image';
import Image from '@/Components/image';

// pattern
import { Icon, Label, Shape, Pattern01, Pattern02 } from './pattern';

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function ElearningHeroIllustration({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const BLUE = '#355EC9';

  const PURPLE = '#9B3AB1';

  const styleIconContent = {
    fontSize: 22,
    color: 'common.black',
    fontWeight: 'fontWeightBold',
  };

  return (
    <Box
      sx={{
        // width: 500,
        height: 500,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: 'absolute', right: 10, bottom: 28, zIndex: 8 }}>
        <img alt="light" src="/assets/images/course/backgroundnew.png" style={{width: "100%", height: "100%" , objectFit:"cover",borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',}}/>
     
      </Box>

      {/* <Box
        {...varDown}
        component={m.div}
        sx={{ position: 'absolute', left: 115, bottom: 115, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="book icon"
          src="/assets/icons/ic_book.png"
          sx={{ width: 52, height: 62 }}
        />
      </Box> */}

      <Box
        {...varRight}
        component={m.div}
        sx={{ position: 'absolute', left: 18, top: 220, zIndex: 8 }}
      >
         <img alt="python" src="https://cdn-icons-png.flaticon.com/512/10485/10485506.png" style={{width: 56, height: 56 }}/>
   
      </Box>

   

      {/* Icon */}

      {/* <Box
        {...varLeft}
        component={m.div}
        sx={{ top: 88, right: 72, zIndex: 8, position: 'absolute' }}
      >
         <img alt="python" src="https://w7.pngwing.com/pngs/852/798/png-transparent-symbol-yellow-orange-line-keychainaccess-orange-preview-pages.png" style={{width: 56, height: 56 }}/>
  
      </Box> */}

<Box
        {...varUp}
        component={m.div}
        sx={{ top: 8, right: 50, zIndex: 8, position: 'absolute' }}
      >
        <Label
          text="PKI"
          icon={
            <img alt="python" src="https://th.bing.com/th/id/OIP.jxud3HlEsBlKsv4it34eXAAAAA?w=216&h=250&rs=1&pid=ImgDetMain" style={{width: 56, height: 56 }}/>
          }
          sx={{
            py: 1.75,
            typography: 'h3',
            color: '#2994FF',
            boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${alpha(
              theme.palette.grey[600],
              0.48
            )}`,
          }}
        />
      </Box>

      {/* <Box {...varUp} component={m.div} sx={{ zIndex: 8, right: 10, position: 'absolute' }}>
        <Icon
          color={PURPLE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}>Cma</Typography>}
          sx={{ transform: 'scale(1.2) translateY(20px) rotate(15deg)' }}
        />
      </Box> */}

      <Box {...varDown} component={m.div} sx={{ zIndex: 8, position: 'absolute' }}>
        <Icon
          color={BLUE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}>RA</Typography>}
          sx={{ transform: 'scale(1.2) translate(-135px, -75px) rotate(15deg)' }}
        />
      </Box>

      <Pattern01 sx={{ left: 0, top: 0 }} />
      <Pattern02 sx={{ top: 0, left: 0, opacity: 0.24, transform: 'scale(1.2)' }} />
      <Shape sx={{ position: 'absolute', right: 32, bottom: 32 }} />
    </Box>
  );
}

export default memo(ElearningHeroIllustration);
