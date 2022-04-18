// 重新构造key 做变换 添加readonly修饰符
type Readonly1<T> = {
  readonly [P in keyof T]: T[P]
}
// type a8 = {
//   readonly name: string
//   readonly age: number
// }
type a8 = Readonly1<{
  name: string
  age: number
}>
