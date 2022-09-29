import router from '@/router'
import { Message } from 'element-ui'
import store2 from 'store2'

import { SYS_CONSTANT } from '@/libs/constant'
import { isEmpty } from 'ivy2'

window.NProgress.configure({ showSpinner: false })

const WHITE_ROUTELIST = window.config.whiteList

router.beforeEach(async (to, from, next) => {
  window.NProgress.start()
  if (store2.get(SYS_CONSTANT.AUTH_TOKEN)) {
    if (to.path === '/login') next()
    // else {
    //   if(isEmpty())
    // }
  } else {
    if (WHITE_ROUTELIST.indexOf(to.path) > -1) next()
    else next('/login')
  }
})

router.afterEach(() => {
  window.NProgress.done()
})
