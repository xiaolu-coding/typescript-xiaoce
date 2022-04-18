// 要根据它遇到条件类型时会分散成单个传入做计算的特性
type isUnion<A, B = A> = A extends A
  ? [B] extends [A]
    ? false
    : true
  : never
// type isUnionResult = true
type isUnionResult = isUnion<'a' | 'b'>
