// 索引类型，重新构造key值
type mapping<Obj extends object> = {
  [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]]
}

// type mappingResult = {
//   a: [1, 1, 1]
//   b: [2, 2, 2]
// }
type mappingResult = mapping<{ a: 1, b: 2}>
