type str4 = '   abc'
// 使用Str匹配模式串，由空字符串和后面的Pre组成，当匹配时，递归trimLeft，否则返回Str
type trimLeft<Str extends string> = Str extends `${' ' | '\t' | '\n'}${infer Pre}` ? trimLeft<Pre> : Str
// type a4 = 'abc'
type a4 = trimLeft<str4>
