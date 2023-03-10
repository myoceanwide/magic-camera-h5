export default [
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/index.vue"), //.vue可以省略
    meta: {
      title: "用户协议",
    },
  },
];
