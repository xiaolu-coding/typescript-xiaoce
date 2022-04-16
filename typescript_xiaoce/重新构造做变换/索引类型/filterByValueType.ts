// 通过as重映射，将key筛选出在ValueType中的值，完成重新构造
type filterByValueType<Obj extends Record<string, any>, ValueType> = {
  [Key in keyof Obj as ValueType extends Obj[Key] ? Key : never]: Obj[Key]
} 
// type filterByValueTypeResult = {
//   a: 1
// }
type filterByValueTypeResult = filterByValueType<{ a: 1, b: 2}, 1>
