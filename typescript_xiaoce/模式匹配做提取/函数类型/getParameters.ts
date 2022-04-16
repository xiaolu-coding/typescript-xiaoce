// 使用Func做模式匹配，将参数类型放到用infer声明的局部变量中，如果匹配成功，返回参数类型Args
type getParameter<Func extends Function> = Func extends (...args: infer Args) => any ? Args : never
// type c = [name: string, age: number]
type c = getParameter<(name: string, age: number) => void>
