// 使用Str做模式匹配，一个字符串就CountArr加一
type strlen<Str extends string, CountArr extends unknown[] = []> = Str extends `${string}${infer Rest}`
  ? strlen<Rest, [unknown, ...CountArr]>
  : CountArr['length']
// type strlenResult = 5
type strlenResult = strlen<'hello'>
