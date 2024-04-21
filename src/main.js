import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import router from './Router';
import VeeValidate from "vee-validate";


const app = createApp(App);
app.use(router);
app.use(VeeValidate)
app.mount('#app');
