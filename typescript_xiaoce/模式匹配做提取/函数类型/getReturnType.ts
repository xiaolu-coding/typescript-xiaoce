// 使用Func做模式匹配，将返回值类型放到用infer声明的局部变量R中，当匹配成功时，返回返回值类型R
type getReturnType<Func extends Function> = Func extends (...args: any[]) => infer R ? R : never
// type c2 = string
type c2 = getReturnType<(name: string, age: number) => string>
