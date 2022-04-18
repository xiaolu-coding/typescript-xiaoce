// 'a=1&b=2&c=3'
type ParseQueryString<Str extends string> =
  Str extends `${infer Param1}&${infer Rest}`
    ? MergeParams<ParseParams<Param1>, ParseQueryString<Rest>>
    : ParseParams<Str>

type a = ParseQueryString<'a=1&b=2&c=3'>
// 提取 a=1这种模式，将其构造成 {a: '1'}
type ParseParams<Str extends string> = Str extends `${infer Key}=${infer Value}`
    ? {
      [K in Key]: Value
    } 
    : {}
// 合并，key值合并Key in keyof OneParam | keyof OtherParam，Value合并，如果两个索引类型中都有，那就合并成一个
type MergeParams<
    OneParam extends Record<string, any>,
    OtherParam extends Record<string, any>
> = {
  [Key in keyof OneParam | keyof OtherParam]: Key extends keyof OneParam
    ? Key extends keyof OtherParam
      ? MergeValues<OneParam[Key], OtherParam[Key]>
      : OneParam[Key]
    : Key extends keyof OtherParam
      ? OtherParam[Key]
      : never
}
// 如果两个值是同一个就返回一个，否则构造一个数组类型
type MergeValues<One, Other> = One extends Other
  ? One
  : Other extends unknown[]
    ? [One, ...Other]
    : [One, Other]
