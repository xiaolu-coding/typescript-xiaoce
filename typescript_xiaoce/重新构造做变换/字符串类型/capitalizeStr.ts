type str = 'abc'
// 使用Str做模式匹配，使用infer声明的First和Rest分别表示首字母和剩余，如果匹配，对First进行大写操作，这就是对字符串的重新构造
type capitailzeStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Str
// type a = "Abc"
type a = capitailzeStr<str>
