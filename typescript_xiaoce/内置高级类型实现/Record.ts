// 这里很巧妙的用到了 keyof any，它的结果是 string | number | symbol：用 keyof any 是动态获取的，比直接写死 string | number | symbol 更好。
type Record1<K extends keyof any, T> = {
  [P in K]: T
}
// type a10 = {
//   x: string
//   y: string
// }
type a10 = Record1<'x' | 'y', string>

