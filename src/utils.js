export const def = function (obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable, //不可枚举
    writable: true,
    configurable: true
  })
}