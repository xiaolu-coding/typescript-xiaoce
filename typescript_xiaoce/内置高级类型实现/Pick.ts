// 重新构造key 做变化 改变对象结构
type Pick1<T, K extends keyof T> = {
  [P in K]: T[P]
}
// type a9 = {
//   age: number
// }
type a9 = Pick1<{
  age: number,
  name: string
}, 'age'>
