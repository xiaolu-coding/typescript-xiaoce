type str2 = "xiao_lu_ok"
// 使用Str做模式匹配，使用Left Right和Rest，分别表示_左边的和_右边的和剩下的，如果匹配，对Right进行大写操作，对剩下的Rest进行递归操作，这就是对字符串的重新构造
type camelCase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${camelCase<Rest>}`
    : Str
// type a2 = "xiaoLuOk
type a2 = camelCase<str2>
