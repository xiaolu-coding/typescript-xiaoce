// 使用Str做模式匹配，使用infer声明的First代表第一个字符，Rest代表剩余字符，如果模式匹配成功First | 递归stringToUnion<Rest>
type stringToUnion<Str extends string> = Str extends `${infer First}${infer Rest}` 
  ? First | stringToUnion<Rest>
  : Str
// type stringToUnionResult = "" | "a" | "b" | "c" | "d" | "e" | "f" | "g"
type stringToUnionResult = stringToUnion<'abcdefg'>
