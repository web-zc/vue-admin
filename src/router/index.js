import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
   redirect:'/layout',
   hide:true,
   meta:{name:'登陆'},
  },
 
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout/index.vue'),
    meta:{name:'主页'},
    children:[
      {
        path:'/layout',
        name:'zc',
        component:  () => import('../views/Zc/index.vue'),
        meta:{name:'主页'},

      }
    ]
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout/index.vue'),
    meta:{name:'信息管理'},
    children:[
      {
        path:'/infoIndex',
        name:'infoIndex',
        component:  () => import('../views/Info/index.vue'),
        meta:{name:'信息列表'},
      },
      {
        path:'/infoCategory',
        name:'zc',
        component:  () => import('../views/Info/category.vue'),
        meta:{name:'信息分类'},
      }
    ]
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout/index.vue'),
    meta:{name:'用户管理'},
    children:[
      {
        path:'/userIndex',
        name:'userIndex',
        component:  () => import('../views/User/index.vue'),
        meta:{name:'用户列表'},
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
