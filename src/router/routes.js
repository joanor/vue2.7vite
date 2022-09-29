export const WHITE_NAME_LIST = []
/**
 * @param {RouteRecordRaw}
 */
export const normalRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页面',
    },
  },
]
