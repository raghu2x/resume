const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
    children: [
      { path: '', component: () => import('components/MainInfo.vue') },
      { path: 'products', component: () => import('components/ProductInfo.vue') },
      { path: 'blogs', component: () => import('components/BlogInfo.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
