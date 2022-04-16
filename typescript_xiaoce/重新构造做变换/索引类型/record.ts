type record<K extends string | number | symbol, T> = {
  [P in K ] : T
}
// 限制obj类型
type uppercaseKeys1<Obj extends record<string, object>> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}
