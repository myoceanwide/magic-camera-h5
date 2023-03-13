import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

// vant 兼容 pc端的touch 操作， 引入模块后自动生效
import "@vant/touch-emulator";

const app = createApp(App);
app.use(router);
app.mount("#app");
