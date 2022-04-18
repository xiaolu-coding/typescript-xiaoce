type Awaited1<T> = T extends null | undefined 
  ? T
  : T extends object & { then(onfulfilled: infer F): any}
    ? F extends ((value: infer V, ...args: any) => any)
      ? Awaited1<V>
      : never
    : T
// type a14 = number
type a14 = Awaited1<Promise<Promise<number>>>
