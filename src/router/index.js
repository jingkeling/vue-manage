import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home/home';
import login from '@/page/login/login';
import test from '@/page/test/test';

Vue.use(Router);

export default new Router({
  routes: [
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    {
      path: "/home",
      name: 'home',
      component: home
    },
    //登录注册
    {
      path: '/login',
      component: login
    },
    //测试页面
    {
      path: '/test',
      component: test
    }
  ]
});
