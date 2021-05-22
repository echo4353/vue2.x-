import Observer from './Observer'
// 创建observe函数  注意函数的名字没有r
export const observe = function (value) {
  // 如果value不是对象，什么都不做
  if (typeof value !== 'object') return
  // 定义ob  存储Observer实例的
  var ob
  if (typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}