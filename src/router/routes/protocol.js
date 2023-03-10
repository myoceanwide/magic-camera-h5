export default [
  {
    path: "/user-policy",
    name: "user-policy",
    component: () => import("@/pages/protocol/user-policy.vue"), //.vue可以省略
    meta: {
      title: "用户协议",
    },
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/protocol/privacy-policy.vue"), //.vue可以省略
    meta: {
      title: "隐私协议",
    },
  },
  {
    path: "/third-sdk-policy",
    name: "third-sdk-policy",
    component: () => import("@/pages/protocol/third-sdk-policy.vue"),
    meta: {
      title: "百变相机APP第三方SDK列表说明",
    },
  },
];
