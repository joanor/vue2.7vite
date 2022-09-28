const httpsRE = /^https:\/\//

/**
 *
 * @param {ProxyList} list
 * @returns
 */
export function createProxy(list) {
  const ret = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)

    // https://github.com/http-party/node-http-proxy#options
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      // rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
      rewrite: path => path.replace(new RegExp(`^${prefix}`), '/society/api'),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    }
  }
  return ret
}
