// "use client"
import { useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Button, AppBar, Toolbar, Container } from '@mui/material';
import { HEADER } from '@/config-global';
// import NavDesktop from './NavDesktop';
import { navConfig } from './nav_config';
import { bgBlur } from '@/utiles/cssStyles';
import useOffSetTop from '@/hooks/useOffSetTop';
import Logo from '@/Components/logo/Logo';
import HeaderShadow from './HeaderShadow';
import useResponsive from '@/hooks/useResponsive';
import NavMobile from './mobile';
import logo from './logo.png'
import dynamic from 'next/dynamic';
type Props = {
  isOffset: boolean;
};
const NavDesktop = dynamic(() => import('@/Header/NavDesktop'), { ssr: false });
export default function Header() {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const isOffset = useOffSetTop();
  // const isOffset = false
  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar

        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          // ...(headerOnDark && {
          //   color: 'common.white',
          // }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center', }}>
          <Box sx={{ flexGrow: 1, lineHeight: 0, position: 'relative' }}>
          <Link href="/">
 
      <img src={logo.src} alt="logo" width="60" />
   
  </Link>
          </Box>



          <Stack
            spacing={5}
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            {isMdUp && <NavDesktop data={navConfig} />}
       

          </Stack>

          {!isMdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}