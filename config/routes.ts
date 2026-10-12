export const routes = [
  {
    path: '/',
    component: '@/layouts/LandingLayout',
    layout: false,
    routes: [
      {
        path: '/',
        component: './Landing',
      },
      {
        path: '/start',
        component: './Start',
      },
      {
        path: '/pricing',
        component: './Pricing',
      },
      {
        path: '/contact',
        component: './Contact',
      },
      {
        path: '/collabs',
        component: './Collabs',
      },
      {
        path: '/refer',
        component: './Refer',
      },
      {
        path: '/resources',
        component: './Resources',
      },
      {
        path: '/base-duka',
        component: './Products/Duka',
      },
      {
        path: '/base-pesa',
        component: './Products/Pesa',
      },
      {
        path: '/base-bandu',
        component: './Products/Bandu',
      },
      {
        path: '/base-mteja',
        component: './Products/Mteja',
      },
      {
        path: '/solutions/biashara-ai',
        component: './Solutions/BiasharaAI',
      },
      {
        path: '/base-smart-reja',
        redirect: '/solutions/biashara-ai',
      },
      {
        path: '/base-dala',
        component: './Products/Dala',
      },
      {
        path: '/base-custom',
        component: './Products/Custom',
      },
      {
        path: '/privacy',
        component: './Privacy',
      },
      {
        path: '/terms',
        component: './Terms',
      },
      {
        path: '/*',
        component: './404',
      },
    ],
  },
];
