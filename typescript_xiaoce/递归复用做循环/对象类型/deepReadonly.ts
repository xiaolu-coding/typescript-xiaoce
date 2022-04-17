// 递归调用，不是Function，就是索引类型。所以要递归
type deepReadonly<Obj extends Record<string, any>> = Obj extends any
  ? {
      readonly [Key in keyof Obj]: Obj[Key] extends object
        ? Obj[Key] extends Function
          ? Obj[Key]
          : deepReadonly<Obj[Key]>
        : Obj[Key]
    }
  : never

type obj = {
  a: {
    b: {
      c: {
        f: () => "xiaolu"
        d: {
          e: {
            xiaolu: string
          }
        }
      }
    }
  }
}

type deepReadonlyResult = deepReadonly<obj>
