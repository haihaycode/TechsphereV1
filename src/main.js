import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import store from './store';
import router from './Router';
import 'notyf/notyf.min.css';
import './assets/css/activeCustumStyle.css';
import { Field, Form, configure } from 'vee-validate'; // Import các thành phần cụ thể cần sử dụng

configure({ validateOnInput: true }); // Cấu hình vee-validate


const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '404 - Not Found';
    next();
});


store.dispatch('checkToken');

app.use(router);
app.use(store);

app.mount('#app');
