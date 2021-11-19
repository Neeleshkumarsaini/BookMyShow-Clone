import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(store).use(router).use(Bootstrap).mount("#app");
