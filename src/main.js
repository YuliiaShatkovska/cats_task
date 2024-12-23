import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store";

import "./assets/styles/main.scss";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
