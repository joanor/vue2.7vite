import Vue from 'vue'
import VueRouter from 'vue-router'
import { normalRoutes } from './routes'
Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    routes: [
      {
        component: () => import('@/layout/default.vue'),
        path: '/',
        redirect: '/home',
        name: 'dashboard',
        children: [
          {
            name: 'home',
            path: '/home',
            component: () => import('@/views/ivyadmin/index.vue'),
            meta: {
              title: '首页',
              icon: 'example',
            },
          },
        ],
      },
      ...normalRoutes,
    ],
    scrollBehavior: () => ({
      left: 0,
      y: 0,
    }),
  })

const router = createRouter()
export const resetRouter = () => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
