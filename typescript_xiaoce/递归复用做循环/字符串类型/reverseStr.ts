// 使用Str做模式匹配，使用infer声明的First表示第一个字符，Rest表示剩余字符，如果模式匹配成功，将First放进Result中，并递归调用reverseStr
type reverseStr<Str extends string, Result extends string = ''> = Str extends `${infer First}${infer Rest}`
  ? reverseStr<Rest, `${First}${Result}`>
  : Result
// type reverseStrResult = "gfedcba"
type reverseStrResult = reverseStr<'abcdefg'>
