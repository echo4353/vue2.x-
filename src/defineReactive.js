import Dep from './Dep'
import { observe } from './observe'

export default function defineReactive (data, key, val) {
  // console.log('我是defineReactive', key)
  const dep = new Dep()
  if (arguments.length == 2) {
    val = data[key]
  }
  //子元素要进行observe，至此形成了递归，这个递归不是函数自己调用自己，而是多个函数、类循环调用
  let childOb = observe(val)
  Object.defineProperty(data, key, {
    // writable: false,//是否可写
    enumerable: true, //是否可枚举
    configurable: true,//是否可配置 如delete
    //getter
    get () {
      console.log('你正在访问' + key + '属性')
      if (Dep.target) {
        dep.depend()
      }
      return val
    },
    //setter
    set (newValue) {
      console.log('你正在改变' + key + '属性', newValue)
      if (newValue == val) {
        return
      }
      val = newValue
      childOb = observe(newValue)
      dep.depend()
      //发布订阅模式，通知dep
      dep.notify()
    }
  })
}
