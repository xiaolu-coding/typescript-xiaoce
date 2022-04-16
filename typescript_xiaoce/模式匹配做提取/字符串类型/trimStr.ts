type str5 = '  abc  '
// 就是使用trimLeft和trimRight去掉前后空格
type trimStr<Str extends string> = trimLeft<trimRight<str5>>
// type a5 = 'abc'
type a5 = trimStr<str5>
