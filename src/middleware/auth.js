// middleware/auth.js

import store from '@/store';

export function isAuthenticated(to, from, next) {
    if (store.state.isLogin) {
      // Nếu chưa đăng nhập, điều hướng về trang đăng nhập
      next('/'); // Điều hướng đến route /login
    } else {
      // Nếu đã đăng nhập, cho phép điều hướng tiếp theo
      next();
    }
  }

  export function unAuthenticated(to, from, next) {
    if (store.state.isLogin) {
      next();
      // Nếu chưa đăng nhập, điều hướng về trang đăng nhập
      // Điều hướng đến route /login
    } else {
      // Nếu đã đăng nhập, cho phép điều hướng tiếp theo
    
      next('/login');
    }
  }
