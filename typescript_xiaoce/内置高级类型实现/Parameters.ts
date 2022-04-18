// 使用模式匹配提取出函数参数类型R，匹配成功后返回参数类型R
type Parameters1<T extends (...args: any) => any> = T extends (...args: infer R) => any ? R : never
// type a = [name: string, age: number]
type a = Parameters1<(name: string, age: number) => any>
