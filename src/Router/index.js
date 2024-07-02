// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import publicRoutes from '@/Router/publicRoutes';
import authRoutes from '@/Router/authRoutes';



const isProduction = process.env.NODE_ENV === 'production';



export const routes = [
  ...publicRoutes,
  ...authRoutes,
//  other routers
];
  
  const router = createRouter({
  history: isProduction ? createWebHashHistory() : createWebHistory(),
  routes,
  linkActiveClass: 'my-custom-active-class',
  linkExactActiveClass: 'my-custom-exact-active-class',
});
export default router;
