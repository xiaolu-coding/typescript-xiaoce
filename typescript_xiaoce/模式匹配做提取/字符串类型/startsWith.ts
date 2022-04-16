type str = 'abc'
// 用Str去匹配Prefix，如果匹配成功，返回true，否则返回false
type startsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true: false
// type a = true
type a = startsWith<str, 'a'>
