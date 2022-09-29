import { SYS_CONSTANT } from '@/libs/constant'
import { http } from '@/plugins/request'
import { defineStore } from 'pinia'
import store2 from 'store2'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
  }),
  getters: {},
  actions: {
    /**
     *
     * @param {LoginForm} data
     * @returns {Promise<boolean>}
     */
    loginByUser(data) {
      return new Promise((resolve, reject) => {
        http
          .get({
            url: '/v7/weather/now',
            params: {
              key: 'bd593d99e47f4943adbeabb9b8ccc9f1',
              location: '116.41,39.92',
            },
          })
          .then(res => {
            console.log(`请求的结果是`, res)
            store2.set(
              SYS_CONSTANT.AUTH_TOKEN,
              'bd593d99e47f4943adbeabb9b8ccc9f1'
            )
            resolve(true)
          })
          .catch(err => {
            console.error(err)
            reject(false)
          })
      })
    },
  },
})
