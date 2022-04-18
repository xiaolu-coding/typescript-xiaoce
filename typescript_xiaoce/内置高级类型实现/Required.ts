// 重新构造key 做变换 -? 移除?修饰符
type Required1<T> = {
  [P in keyof T]-?: T[P]
}
// type a7 = {
//   name: string
//   age: number
// }
type a7 = Required1<{
  name?: string,
  age: number
}>
