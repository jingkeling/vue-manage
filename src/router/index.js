import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home';
import index from '@/page/index';
import test from '@/page/test/test';
import echart from '@/page/myfree/echart';

Vue.use(Router);

export default new Router({
  routes: [
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/index'
    },
    {
      path: "/home",
      name: 'home',
      component: home,
      children:[
        {path: 'echart', component: echart,name: 'echart1'}
      ]
    },
    //欢迎页
    {
      path: '/index',
      component: index
    },
    //测试页面
    {
      path: '/test',
      component: test
    }
  ]
});
