/**
 * @returns {Array<import('vite-plugin-mock').MockMethod>}
 */
const createMockData = () => {
  return [
    {
      url: '/api/login',
      method: 'get',
      response: () => {
        return {
          code: 200,
          message: 'success',
          data: {
            name: 'xixi',
          },
        }
      },
    },
  ]
}

// 启动mock数据
export default createMockData()
