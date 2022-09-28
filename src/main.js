// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import { setupStyles } from './styles'

// 引入样式
setupStyles()

new Vue({
  render: h => h(App),
}).$mount('#app')
