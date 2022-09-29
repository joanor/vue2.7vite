import { viteMockServe } from 'vite-plugin-mock'

/**
 * 配置mock server
 * @param {boolean} isBuild
 * @returns
 */
export function configMockServerPlugin(isBuild) {
  return viteMockServe({
    mockPath: './mock',
    localEnabled: !isBuild,
    prodEnabled: false,
    supportTs: false,
  })
}
