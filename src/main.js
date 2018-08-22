import Vue from "vue";
import App from "./App";
import router from "./router";
import Banshee from "banshee-ui";

Vue.config.productionTip = false;

Vue.use(Banshee);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
