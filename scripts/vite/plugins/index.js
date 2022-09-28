import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import { configCompressPlugin } from './compress'
import { configUnocssPlugin } from './unocss'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
/**
 *
 * @param {ViteEnv} viteEnv
 * @param {boolean} isBuild
 * @returns
 */
export function createVitePlugins(viteEnv, isBuild) {
  const {
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv
  const vitePlugins = [
    vue(),
    AutoImport({
      resolvers: [
        ElementUiResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ant-design'],
        }),
        ElementUiResolver(),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    configUnocssPlugin(),
  ]

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy)

  // rollup-plugin-gzip
  const compressPlugin = configCompressPlugin(
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  )
  isBuild && compressPlugin && vitePlugins.push(compressPlugin)

  return vitePlugins
}
