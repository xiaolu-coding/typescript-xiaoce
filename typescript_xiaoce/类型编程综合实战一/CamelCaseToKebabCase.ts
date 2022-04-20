type CamelCaseToKebabCase<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First extends Lowercase<First>
      ? `${First}${CamelCaseToKebabCase<Rest>}`
      : `-${Lowercase<First>}${CamelCaseToKebabCase<Rest>}`
    : Str
// type CamelCaseToKebabCaseResult = "hello-world-xiao-lu"
type CamelCaseToKebabCaseResult = CamelCaseToKebabCase<'helloWorldXiaoLu'>   
