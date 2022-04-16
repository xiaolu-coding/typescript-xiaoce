// 通过添加 -readonly 移除readonly修饰符，完成构造
type toMutable<Obj extends object> = {
  -readonly [Key in keyof Obj]: Obj[Key]
}
// type toMutableResult = {
//   a: 1
//   b: 2
// }
type toMutableResult = toMutable<{ readonly a: 1, b: 2}>
