// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'

// 引入路由导航守卫
import './middleware'

// 引入pinia
import pinia from './store'

// 引入样式
import './styles'

// 引入插件
import './plugins'

new Vue({
  pinia,
  router,
  render: h => h(App),
}).$mount('#app')
