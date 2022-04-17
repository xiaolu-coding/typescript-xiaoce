// 通过递归完成多次promise的嵌套判断，使用T做模式匹配，使用infer声明的ValueType代表Promise内部的值类型，如果模式匹配，递归判断，递归结束后，返回最内部的值类型
type deepPromiseValueType<T> = T extends Promise<infer ValueType> ? deepPromiseValueType<ValueType> : T
// type deepPromiseValueTypeResult = number
type deepPromiseValueTypeResult = deepPromiseValueType<
  Promise<Promise<Promise<number>>>
>
