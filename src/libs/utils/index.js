/**
 * 自动引入
 * @param {Record<string, unknown>} files
 * @returns
 */
export const autoImport = files => {
  const modules = {}
  for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
      modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key]
    }
  }
  return modules
}
