// 使用模式匹配提取出构造函数的参数类型
type ConstructorParameters1<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer R) => any ? R : never

interface Person {
  name: string
}

interface PersonConstructor {
  new(name: string): Person
}
// type a3 = [name: string]
type a3 = ConstructorParameters1<PersonConstructor>
