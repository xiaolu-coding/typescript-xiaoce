type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer Item}-${infer Rest}`
    ? `${Item}${KebabCaseToCamelCase<Capitalize<Rest>>}`
    : Str
// type KebabCaseToCamelCaseResult = "helloWorldXiaoLu"
type KebabCaseToCamelCaseResult = KebabCaseToCamelCase<'hello-world-xiao-lu'>
