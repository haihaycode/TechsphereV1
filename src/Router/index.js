import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
