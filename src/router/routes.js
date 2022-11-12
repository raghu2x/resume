const routes = [
  {
    path: "/",
    component: () => import("layouts/PublicLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/ResumeView.vue"),
        children: [
          { path: "", component: () => import("components/MainInfo.vue") },
          { path: "products", component: () => import("components/ProductInfo.vue") },
          { path: "blogs", component: () => import("components/BlogInfo.vue") },
        ]
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
]

export default routes
