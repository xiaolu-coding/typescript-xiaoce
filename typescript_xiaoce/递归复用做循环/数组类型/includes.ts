// 使用Arr做模式匹配，使用infer声明的First表示第一个元素，Rest表示剩余元素，当模式匹配成功，使用判断FindItem是否等于First，如果不等于，递归Rest，如果等于返回true
type includes<Arr extends unknown[], FindItem> = Arr extends [infer First, ...infer Rest] 
  ? IsEqual<First, FindItem> extends true 
    ? true 
    : includes<Rest, FindItem> 
  : false

type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
// type includesResult = true
type includesResult = includes<[1, 2, 3, 4, 5, 3], 3>
