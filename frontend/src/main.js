// main.ts
import { createApp } from "vue";
import './style.css'
import App from "./App.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { 
    BButton, 
    BButtonGroup, 
    FormPlugin, 
    FormGroupPlugin, 
    FormInputPlugin, 
    CardPlugin, 
    FormSelectPlugin, 
    FormTextareaPlugin,
    FormFilePlugin
 } from "bootstrap-vue";

createApp(App)
    .use(VueAxios, axios)
    .use(FormPlugin)
    .use(FormGroupPlugin)
    .use(FormInputPlugin)
    .use(FormSelectPlugin)
    .use(FormTextareaPlugin)
    .use(FormFilePlugin)
    .use(CardPlugin)
    .component('b-button-group', BButtonGroup)
    .component('b-button', BButton)
    .mount("#app");