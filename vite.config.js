import { defineConfig, loadEnv } from 'vite'
import { wrapperEnv } from './scripts/vite/utils'
import { configAlias } from './scripts/vite/alias'
import { createProxy } from './scripts/vite/proxy'
import { createVitePlugins } from './scripts/vite/plugins'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

/**
 * @param {import('vite').ConfigEnv}
 * @returns {import('vite').UserConfig}
 */
export default ({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build'
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      ...configAlias(),
    },
    server: {
      host: true,
      open: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      // minify:'terser',
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     // Used to delete console in production environment
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import './src/styles/var.scss';`,
        },
      },
    },
    plugins: [...createVitePlugins(viteEnv, isBuild)],
  }
}
