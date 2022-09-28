import { checkStatus, createAxios } from 'ivy2'
import { Message } from 'element-ui'
import Vue from 'vue'
import store2 from 'store2'

export const http = createAxios({
  baseURL: process.env.NODE_ENV === 'development',
  timeout: 30000,
  transform: {
    transformRequestHook: (response, options) => {
      const { isTransformResponse, isReturnNativeResponse } = options

      // 是否返回原生响应头 比如：需要获取响应头时使用该属性
      if (isReturnNativeResponse) return response

      // 是否不进行任何处理，直接返回
      if (!isTransformResponse) return response.data

      if (!response.data) throw new Error('请求出错，请稍后重试')

      const result = response.data
      const { code, message } = result

      const hasSuccess = code === 0
      if (hasSuccess) return result.data ?? ''
      else {
        const [errMessage] = checkStatus(code, message)
        Message.error(errMessage)
        throw new Error(
          `The network request returns a data error-->${code}-->${errMessage}`
        )
      }
    },
    requestCatchHook: (config, options) => {
      const token = store2.get('AUTH_TOKEN')
      if (token && config?.requestOptions?.withToken !== false) {
        config.headers['Authorization'] = options.authenticationScheme
          ? `${options.authenticationScheme} ${token}`
          : token
      }

      return config
    },
    responseInterceptorsCatch: ({ response }) => {
      if (response?.status) {
        const [errorMessage] = checkStatus(
          response?.status,
          response?.data?.message
        )
        Message.error(errorMessage)
        // 如果返回的不是Promise.reject，那么将会接着执行transformRequestHook中的代码；如果返回的是Promise.reject，那么将会执行requestCatchHook中的代码
        return Promise.reject(errorMessage)
      }
    },
  },
  requestOptions: {
    isTransformResponse: true,
  },
})

Vue.prototype.$http = http
