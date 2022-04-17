// 使用Str做模式匹配，使用infer声明的Pre和Post代表From左右两边的值，如果模式匹配成功，对Post进行递归replaceAll调用，这样就能全部替换
type replaceAll<Str extends string, From extends string, To extends string> = Str extends `${infer Pre}${From}${infer Post}` 
  ? `${Pre}${To}${replaceAll<Post, From, To>}`
  : Str
// type replaceAllResult = "aeebceeeefg"
type replaceAllResult = replaceAll<"addbcdddefg", "d", "e">
