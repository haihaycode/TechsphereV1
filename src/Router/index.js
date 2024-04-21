import { createRouter, createWebHistory } from 'vue-router';

const useComponent = component => () => import(`../views/${component}.vue`);



export const routes = [
  {
    path: '/',
    component: useComponent("homePage"),
    meta: {
      title: "VeeValidate Examples",
      description:
        "This is a collection of examples to showcase the features of VeeValidate"
    }
  }, {
    path: '/register',
    component: useComponent("Register"),
    meta: {
      title: "VeeValidate Examples",
      description:
        "This is a collection of examples to showcase the features of VeeValidate"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
