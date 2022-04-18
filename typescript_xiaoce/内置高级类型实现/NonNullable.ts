type NonNullable1<T> = T extends null | undefined ? never : T
// type a15 = never
type a15 = NonNullable1<null | undefined>
// type a16 = string
type a16 = NonNullable1<string>
