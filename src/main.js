import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import router from './Router';
import { Field, Form, configure } from 'vee-validate'; // Import các thành phần cụ thể cần sử dụng

configure({ validateOnInput: true }); // Cấu hình vee-validate

const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);
app.use(router);
app.mount('#app');
