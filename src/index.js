
import { observe } from './observe'
import Watcher from './Watcher'
var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 2,
  g: [22, 33, 44, 55]
}


// observe(obj)
// obj.a.m.n = 10,
// obj.g.splice(2, 1, [88, 99])
// obj.g.push(100)

// new Watcher(obj, 'a.m.n', (val) => {
//   console.log('****', val)
// })

// obj.a.m.n = 100
// console.log(obj)

function getFn () {
  console.log(arguments[1]
  )
  return eval(arguments[1])
}
console.log(getFn(obj, 'obj.a.m.n'))