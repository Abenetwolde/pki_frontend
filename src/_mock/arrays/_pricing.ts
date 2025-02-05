// PRICING
// ----------------------------------------------------------------------

export const _pricingHome = [
  {
    license: 'Standard',
    price: '59',
    icons: ['/assets/icons/platforms/ic_js.svg'],
    commons: ['One end products', '12 months updates', '6 months of support'],
    options: [
      { title: 'JavaScript version', disabled: false },
      { title: 'TypeScript version', disabled: true },
      { title: 'Design resources', disabled: true },
      { title: 'Commercial applications', disabled: true },
    ],
  },
  {
    license: 'Plus',
    price: '99',
    icons: [
      '/assets/icons/platforms/ic_js.svg',
      '/assets/icons/platforms/ic_ts.svg',
      '/assets/icons/platforms/ic_figma.svg',
    ],
    commons: ['One end products', '12 months updates', '6 months of support'],
    options: [
      { title: 'JavaScript version', disabled: false },
      { title: 'TypeScript version', disabled: false },
      { title: 'Design resources', disabled: false },
      { title: 'Commercial applications', disabled: true },
    ],
  },
  {
    license: 'Extended',
    price: '249',
    icons: [
      '/assets/icons/platforms/ic_js.svg',
      '/assets/icons/platforms/ic_ts.svg',
      '/assets/icons/platforms/ic_figma.svg',
    ],
    commons: ['One end products', '12 months updates', '6 months of support'],
    options: [
      { title: 'JavaScript version', disabled: false },
      { title: 'TypeScript version', disabled: false },
      { title: 'Design resources', disabled: false },
      { title: 'Commercial applications', disabled: false },
    ],
  },
];

export const _pricingMarketing = [
  {
    license: 'E-invoice',
    price: 'Free',
    icon: 'basil:invoice-solid',
    caption: 'Certificate for e-invoicing. Requires TIN and System ID.',
    options: ['Organization Name', 'Taxpayer Identification Number (TIN)', 'Business/Branch Name', 'System ID', 'CSR File Upload'],
  },
  {
    license: 'Digital Signature',
    price: 'Free',
    icon: 'fluent:document-signature-28-filled',
    caption: 'Certificate for digital signing. Requires full name and email.',
    options: ['Full Name', 'E-mail', 'State', 'Country', 'CSR File Upload'],
  },
  {
    license: 'E-mail Security',
    price: 'Free',
    icon: 'lets-icons:e-mail',
    caption: 'Certificate for email encryption. Requires full name and email.',
    options: ['Full Name', 'E-mail', 'State', 'Country', 'CSR File Upload'],
  },
];

export const _pricing01 = [
  {
    license: 'Basic',
    price: 'Free',
    icon: '/assets/icons/pricing/ic_plan_basic01.svg',
    options: [
      { title: '3 prototypes', disabled: false },
      { title: '3 boards', disabled: false },
      { title: 'Up to 5 team members', disabled: true },
      { title: 'Advanced security', disabled: true },
      { title: 'Permissions & workflows', disabled: true },
    ],
  },
  {
    license: 'Starter',
    price: '4.99',
    icon: '/assets/icons/pricing/ic_plan_starter01.svg',
    options: [
      { title: '3 prototypes', disabled: false },
      { title: '3 boards', disabled: false },
      { title: 'Up to 5 team members', disabled: false },
      { title: 'Advanced security', disabled: true },
      { title: 'Permissions & workflows', disabled: true },
    ],
  },
  {
    license: 'Premium',
    price: '9.99',
    icon: '/assets/icons/pricing/ic_plan_premium01.svg',
    options: [
      { title: '3 prototypes', disabled: false },
      { title: '3 boards', disabled: false },
      { title: 'Up to 5 team members', disabled: false },
      { title: 'Advanced security', disabled: false },
      { title: 'Permissions & workflows', disabled: false },
    ],
  },
];

export const _pricing02 = [
  {
    license: 'Start',
    caption: 'Next 3 months',
    price: 'Free',
    icon: '/assets/icons/pricing/ic_plan_basic02.svg',
    options: [
      { title: '3 prototypes', tootip: '3 prototypes', disabled: false },
      { title: '3 boards', tootip: '3 boards', disabled: false },
      { title: 'Up to 5 team members', tootip: 'Up to 5 team members', disabled: true },
      { title: 'Advanced security', tootip: 'Advanced security', disabled: true },
      { title: 'Permissions & workflows', tootip: 'Permissions & workflows', disabled: true },
      { title: 'Long feature one', tootip: 'Long feature one', disabled: true },
    ],
  },
  {
    license: 'Pro',
    caption: 'Charging $456 per/y',
    price: '4.99',
    icon: '/assets/icons/pricing/ic_plan_starter02.svg',
    options: [
      { title: '3 prototypes', tootip: '3 prototypes', disabled: false },
      { title: '3 boards', tootip: '3 boards', disabled: false },
      { title: 'Up to 5 team members', tootip: 'Up to 5 team members', disabled: false },
      { title: 'Advanced security', tootip: 'Advanced security', disabled: true },
      { title: 'Permissions & workflows', tootip: 'Permissions & workflows', disabled: true },
      { title: 'Long feature one', tootip: 'Long feature one', disabled: true },
    ],
  },
  {
    license: 'Business',
    caption: 'Charging $696 per/y',
    price: '9.99',
    icon: '/assets/icons/pricing/ic_plan_premium02.svg',
    options: [
      { title: '3 prototypes', tootip: '3 prototypes', disabled: false },
      { title: '3 boards', tootip: '3 boards', disabled: false },
      { title: 'Up to 5 team members', tootip: 'Up to 5 team members', disabled: false },
      { title: 'Advanced security', tootip: 'Advanced security', disabled: false },
      { title: 'Permissions & workflows', tootip: 'Permissions & workflows', disabled: false },
      { title: 'Long feature one', tootip: 'Long feature one', disabled: false },
    ],
  },
];
