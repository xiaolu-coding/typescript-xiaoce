type Omit1<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
// type a13 = {
//   name: string
// }
type a13 = Omit1<{
  name: string,
  age: number
}, 'age'>
