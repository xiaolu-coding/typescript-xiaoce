// 元组类型也是数组类型，但每个元素都是只读的，并且 length 是数字字面量，而数组的 length 是 number。
type isTuple<T> = T extends readonly [...params: infer Eles]
  ? NotEqual<Eles['length'], number>
  : false

type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? false
  : true
// type isTupleResult = true
type isTupleResult = isTuple<[1, 2, 3]>
