export default [
  {
    path: "/",
    name: "pc",
    component: () => import("@/pages/pc/index"), //.vue可以省略
  },
  {
    path: "/download",
    name: "download",
    component: () => import("@/pages/download/index"), //.vue可以省略
  },
];
