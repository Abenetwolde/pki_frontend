// routes
// import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Landing', path: "paths.marketing.landing "},
      { title: 'Services', path: "paths.marketing.landing "},
     
    ],
  },
]

export const navConfig = [
  { title: 'Page 1', path: '/' },
  { title: 'Page 2', path: "compoent" },
  {
    title: 'Pages',
    path: "pages",
    children: [pageLinks[0]],
  },

];
