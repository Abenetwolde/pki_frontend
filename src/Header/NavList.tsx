"use client"
import { useState } from 'react';

// next
// import { useRouter } from 'next/router';
// @mui
import { Collapse } from '@mui/material';
// hooks
// import useActiveLink from 'src/hooks/useActiveLink';
// components
// import { NavSectionVertical } from 'src/components/nav-section';
import NavSectionVertical from './NavSectionVertical';
//
// import { NavItemBaseProps } from '../types';
// import NavItem from './NavItem';
import { NavItem } from './NavItem';

// ----------------------------------------------------------------------

type NavListProps = {
  item: any;
};

export default function NavList({ item }: NavListProps) {
//   const { pathname } = useRouter();

  const { path, children } = item;

//   const { isExternalLink } = useActiveLink(path);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (children) {
      setOpen(!open);
    } else {
      const section = document.getElementById(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };


  return (
    <>
      <NavItem
        item={item}
        open={open}
        onClick={handleClick} 
        // active={pathname === path}
        // isExternalLink={isExternalLink}
      />

      {!!children && (
        <Collapse in={open} unmountOnExit>
          <NavSectionVertical data={children} />
        </Collapse>
      )}
    </>
  );
}
