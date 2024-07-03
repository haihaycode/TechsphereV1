const useComponent = component => () => import(`../views/${component}.vue`);
import { isAuthenticated,unAuthenticated } from '@/middleware/auth';
import { logout } from '@/utils/auth';

const authRoutes = [
    {
        path: '/register',
        component: useComponent("Register"),
        beforeEnter: isAuthenticated,
    
        meta: {
          title: "Techsphere - register",
          description: "This is a collection of examples to showcase the features of VeeValidate"
        }
      },
      {
        path: '/login',
        component: useComponent("Login"),
        beforeEnter: isAuthenticated,
        meta: {
          title: "Techsphere - login",
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
          title: "Techsphere - My Account",
          description: "This is a collection of examples to showcase the features of VeeValidate"
        },
        exact: true  
      },
      {
        path: '/account/info',
        component: useComponent("UserInformation"),
        beforeEnter : unAuthenticated,
        meta: {
          title: "Techsphere - User Information",
          description:
            "This is a collection of examples to showcase the features of VeeValidate"
        }
      }
      , {
        path: '/account/forgetpassword',
        component: useComponent("ForgetPassword"),
        beforeEnter : unAuthenticated,
        meta: {
          title: "Techsphere - Forgot Password",
          description:
            "This is a collection of examples to showcase the features of VeeValidate"
        }
      }
  ];
  
  export default authRoutes;