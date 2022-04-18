// 使用模式匹配提取出函数返回值类型R，模式匹配成功时返回返回值类型R
type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
// type a2 = string
type a2 = ReturnType1<(name: string, age: number) => string>
