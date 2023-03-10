// 路径配置 .vue 可以省略
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index/index.vue"), //.vue可以省略
    meta: {
      title: "安全协议",
    },
  },
];
export default routes;
