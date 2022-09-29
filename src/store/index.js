import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'

// Vue注册插件
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

export default pinia
