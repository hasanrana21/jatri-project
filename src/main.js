import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import axios from "axios";

window.axios = axios;
createApp(App).mount("#app");
