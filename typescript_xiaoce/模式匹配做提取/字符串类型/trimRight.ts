type str3 = 'abc    '
// 使用Str匹配模式串，由Prefix和后面的空字符串组成，匹配成功则递归，否则返回Str
type trimRigth<Str extends string> = Str extends `${infer Pre}${' ' | '\t' | '\n' }` ? trimRigth<Pre> : Str
// type a3 = 'abc'
type a3 = trimRigth<str3>
