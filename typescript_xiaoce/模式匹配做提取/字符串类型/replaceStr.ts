type str2 = 'abc'
// 使用Str去匹配模式串，由From和前后字符串组成，匹配成功返回To和前后字符串
type replaceStr<Str extends string, From extends string, To extends string> = Str extends `${infer Pre}${From}${infer Post}` ? `${Pre}${To}${Post}` : Str
// type a2 = 'Abc'
type a2 = replaceStr<str2, 'a', 'A'>
