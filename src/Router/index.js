// router/index.js

// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { isAuthenticated,unAuthenticated } from '@/middleware/auth';
import { logout } from '@/utils/auth';




const useComponent = component => () => import(`../views/${component}.vue`);
const isProduction = process.env.NODE_ENV === 'production';

export const routes = [
  {
    path: '/',
    component: useComponent("homePage"),
    meta: {
      title: "Techsphere - Home Page",
      description: "This is a collection of examples to showcase the features of VeeValidate"
    }
  },
  {
    path: '/register',
    component: useComponent("Register"),
    beforeEnter: isAuthenticated,

    meta: {
      title: "Đăng ký tài khoản",
      description: "This is a collection of examples to showcase the features of VeeValidate"
    }
  },
  {
    path: '/login',
    component: useComponent("Login"),
    beforeEnter: isAuthenticated,
    meta: {
      title: "Đăng Nhập tài khoản",
      description: "This is a collection of examples to showcase the features of VeeValidate"
    }
  },
  {
    path: '/logout',
    component: { template: '<div>Logging out...</div>' },
    beforeEnter(to, from, next) {
      logout();
      next('/');
    }
  }
  , 
  {
    path: '/account',
    component: useComponent("Dashboard"),
    beforeEnter: unAuthenticated,
    meta: {
      title: " Cá Nhân",
      description: "This is a collection of examples to showcase the features of VeeValidate"
    },
    exact: true  // Đảm bảo route này được xác định là exact
  },
  {
    path: '/account/info',
    component: useComponent("UserInformation"),
    beforeEnter : unAuthenticated,
    meta: {
      title: "Thông Tin Cá Nhân",
      description:
        "This is a collection of examples to showcase the features of VeeValidate"
    }
  }
  , {
    path: '/account/forgetpassword',
    component: useComponent("ForgetPassword"),
    beforeEnter : unAuthenticated,
    meta: {
      title: "Đổi mật khẩu",
      description:
        "This is a collection of examples to showcase the features of VeeValidate"
    }
  }

  ];
  
  const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: isProduction ? createWebHashHistory() : createWebHistory(),
  routes,
  linkActiveClass: 'my-custom-active-class',
  linkExactActiveClass: 'my-custom-exact-active-class',
});




export default router;
