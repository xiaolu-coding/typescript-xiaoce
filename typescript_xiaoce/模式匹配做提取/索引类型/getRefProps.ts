// 使用ref做模式匹配，使用infer声明的局部变量Value保存ref的值类型，当模式匹配成功时，返回ref的值类型
type getRefProps<Props> = 'ref' extends keyof Props ? Props extends { ref?: infer Value | undefined} ? Value : never : never
// type e1 = 1
type e1 = getRefProps<{ref?: 1, name: 'xiaolu'}>
// type e2 = string
type e2 = getRefProps<{ref?: string, name: 'xiaolu'}>
// type e3 = undefined
type e3 = getRefProps<{ref?: undefined, name: 'xiaolu'}>
