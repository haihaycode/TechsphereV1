import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css'
import router from './Router'; // Sử dụng router đã được export từ router/index.js



createApp(App).use(router).mount('#app');
