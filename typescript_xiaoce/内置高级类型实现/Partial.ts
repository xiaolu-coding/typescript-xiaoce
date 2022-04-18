// 重新构造key 做变化 添加?修饰符
type Partial1<T> = {
  [P in keyof T]?: T[P]
} 
// type a6 = {
//   name?: string
//   age?: number
// }
type a6 = Partial1<{
  name: string,
  age: number
}>
