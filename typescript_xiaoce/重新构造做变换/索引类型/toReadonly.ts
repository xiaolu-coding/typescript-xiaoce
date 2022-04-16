// 给key值增加readonly修饰符 完成重新构造
type toReadonly<Obj extends object> = {
  readonly [Key in keyof Obj]: Obj[Key]
}
// type toReadonlyResult = {
//   readonly a: 1
//   readonly b: 2
// }
type toReadonlyResult = toReadonly<{ a: 1, b: 2}>
