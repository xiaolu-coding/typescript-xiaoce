// 给key值添加?修饰符，完成重新构造
type toPartial<Obj extends object> = {
  [Key in keyof Obj]?: Obj[Key]
}
// type toPartialResult = {
//   a?: 1
//   b?: 2
// }
type toPartialResult = toPartial<{ a: 1, b: 2}>
