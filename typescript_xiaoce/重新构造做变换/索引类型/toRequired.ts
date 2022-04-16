// 通过移除?修饰符完成构造
type toRequired<Obj extends object> = {
  [Key in keyof Obj]-?: Obj[Key]
}
// type toRequiredResult = {
//   a: 1
//   b: 2
// }
type toRequiredResult = toRequired<{ a?: 1, b: 2}>
