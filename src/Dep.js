
var uid = 0
export default class Dep {
  constructor() {
    console.log('我是Dep类的构造函数')
    this.id = uid++
    // 用数组存储自己的订阅者，这个数组里放的是Watcher的实例
    this.subs = []
  }
  // 添加订阅
  addSub (sub) {
    this.subs.push(sub)
  }
  // 添加依赖
  depend () {
    // Dep.target 实际上就是我们自己指定的一个全局位置
    if (Dep.target) {
      this.addSub(Dep.target)
    }
  }
  // 通知更新
  notify () {
    console.log('我是notify')
    // 浅克隆一份
    const subs = this.subs.slice()
    // 遍历
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}