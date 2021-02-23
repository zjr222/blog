import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from "../page/index.vue"
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
          path: '/index',
          name: 'index',
          component: () => import("@/components/main/index.vue")
        },
        {
          path: '/tags',
          name: 'tags',
          component: () => import("@/components/tag/index.vue"),
        },
        {
          path: '/timeline',
          name: 'timeline',
          component: () => import("@/components/timeline/index.vue"),
        },
        {
          path: '/categories/note',
          name: 'note',
          component: () => import("@/components/note/index.vue"),
        },
        {
          path: '/categories/daily',
          name: 'daily',
          component: () => import("@/components/daily/index.vue")
        },
        {
          path: '/commentBoard',
          name: 'commentBoard',
          component: () => import("@/components/comment/index.vue"),
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: () => import("@/components/login/index.vue")
    }, {
      path: '/admin-manage',
      name: 'admin',
      component: () => import("@/components/admin/index.vue"),
      redirect: '/admin/artManage',
      children: [{
          path: '/admin/artManage',
          name: 'artManage',
          component: () => import("@/components/artManage/index.vue")
        },
        {
          path: '/admin/comManage',
          name: 'comManage',
          component: () => import("@/components/comManage/index.vue")
        }, {
          path: '/admin/pubArt',
          name: 'pubArt',
          component: () => import("@/components/pubArt/index.vue")
        }
      ]
    },
    {
      path: '/aboutself',
      name: 'aboutself',
      component: () => import("@/components/about/aboutSelf.vue"),
    },
  ],
})
