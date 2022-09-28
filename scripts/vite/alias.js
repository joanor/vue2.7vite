import { resolve } from 'path'
const pathResolve = dir => resolve(process.cwd(), '.', dir)

export function configAlias() {
  return {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src'),
      },
      {
        find: '@views',
        replacement: pathResolve('src/views'),
      },
      {
        find: '@styles',
        replacement: pathResolve('src/styles'),
      },
    ],
  }
}

/**
 *
 * @param {*} b
 * @param {*} c
 * @returns
 */
function a(b, c) {
  return b, c
}
