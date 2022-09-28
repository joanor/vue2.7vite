// vite-plugin-compress的增强版，压缩用的

import viteCompression from 'vite-plugin-compression'

export function configCompressPlugin(algorithm, deleteOriginFile = false) {
  if (algorithm === 'gzip') {
    return viteCompression({
      deleteOriginFile,
    })
  }
  if (algorithm === 'brotliCompress') {
    return viteCompression({
      ext: '.br',
      algorithm,
      deleteOriginFile,
    })
  }
}
