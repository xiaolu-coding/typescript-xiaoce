// 使用as重映射完成对key的重新构造 Key & string是因为索引类型可能为string、number、symbol类型，而这里 是只能接收string类型，所以& string
type uppercaseKeys<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>] : Obj[Key]
}
// type uppercaseKeysResult = {
//   A: 1
//   B: 2
// }
type uppercaseKeysResult = uppercaseKeys<{ a: 1, b: 2}>
