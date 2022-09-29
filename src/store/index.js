import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'

// Vue注册插件（只有Vue2需要）
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

export default pinia

export * from './modules/globals'
export * from './modules/user'
export * from './modules/permission'
export * from './modules/app'
