import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homePage.vue';
import register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/register',
    component: register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
