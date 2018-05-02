import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index';
import login from '@/page/login';
import test from '@/page/test/test';
import echart from '@/page/myfree/echart';
import chathub from '@/page/lab/chathub';

Vue.use(Router);

export default new Router({
  routes: [
    //设置自动跳转，地址为空时自动跳转home页面
    {
      path: '',
      redirect: '/login'
    },
    //
    {
      path: "/index",
      name: 'index',
      component: index,
      children:[
        {path: 'echart', component: echart,name: 'echart1'},
        {path: 'chathub', component: chathub,name: 'chathub'},
      ]
    },

    //欢迎页
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
