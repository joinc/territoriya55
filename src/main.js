import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollactive from "vue-scrollactive";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faVk,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the specific imported icons
library.add(faAngleDoubleUp);
library.add(faFacebookSquare);
library.add(faTwitter);
library.add(faVk);
library.add(faInstagram);

// Enable the FontAwesomeIcon component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueScrollactive);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
