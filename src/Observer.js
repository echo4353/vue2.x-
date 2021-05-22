import { def } from './utils'
import defineReactive from './defineReactive.js'
import { arrayMethods } from './array'
import { observe } from './observe'
import Dep from './Dep'
// Observer 类 将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的object）
export default class Observer {
  constructor(value) {
    this.dep = new Dep()
    //给实例(this,一定要注意，构造函数中的this不是表示类本身，而是表示实例)
    // value.__ob__ = this
    def(value, '__ob__', this, false)
    // console.log('我是Observer构造器', value) 
    //不要忘记初心，Observer类的目的是：将一个正常的Object转换为每个层级的属性都是响应式（可以被侦测的）的object
    //检查它是数组还是对象
    if (Array.isArray(value)) {
      //如果是数组，要非常强行的蛮干，将这个数组的原型，指向arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
      this.observerArray(value)
    } else {
      this.walk(value)
    }
  }
  //对象遍历
  walk (value) {
    for (let k in value) {
      defineReactive(value, k)
    }
  }
  //数组遍历
  observerArray (arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      //逐项进行observe
      observe(arr[i])
    }
  }
}