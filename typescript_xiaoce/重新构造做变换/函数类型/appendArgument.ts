// 通过Func做模式匹配，通过Args表示参数类型，通过ReturnType表示返回值类型，如果模式匹配，扩展参数类型
type appendArgument<Func extends Function, Arg> = Func extends (...args: infer Args) => infer ReutrnType 
  ? (...args: [...Args, Arg]) => ReutrnType
  : never
// type AppendArgumentResult = (args_0: number, args_1: number) => string
type AppendArgumentResult = appendArgument<(a: number) => string, number>
