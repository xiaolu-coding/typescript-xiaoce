// 可选索引的值为 undefined 和值类型的联合类型。
type getOptional<Obj extends Record<string, any>> = {
  [Key in keyof Obj as {} extends Pick<Obj, Key> ? Key : never] 
  : Obj[Key]
}
// type getOptionalResult = {
//   age?: number
// }
type getOptionalResult = getOptional<{
  name: string
  age?: number
}>

