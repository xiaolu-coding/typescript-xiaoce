type CurriedFunc<Params, Return> = Params extends []
  ? () => Return
  : Params extends [infer Arg]
  ? (arg: Arg) => Return
  : Params extends [infer Arg, ...infer Rest]
  ? (arg: Arg) => CurriedFunc<Rest, Return>
  : never

declare function currying<Func>(
  fn: Func
): Func extends (...args: infer Params) => infer Result
  ? CurriedFunc<Params, Result>
  : never

const func = (a: string, b: number, c: boolean) => {}

const curriedFunc = currying(func)
