// 使用模式匹配提取出this的类型
type ThisParmaeterType1<T> = T extends (this: infer R, ...args) => any ? R : unknown

interface Person {
  name: string
}

function hello(this: Person) {
  console.log(this.name)
}

type a4 = ThisParmaeterType1<typeof hello>
