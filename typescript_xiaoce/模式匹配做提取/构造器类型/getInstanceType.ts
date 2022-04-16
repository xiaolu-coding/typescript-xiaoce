interface Person {
  name: string
}

interface PersonConstructor {
  new (name: string): Person
}
// 使用ConsructorType做模式匹配，使用infer声明的局部变量InstanceType保存构造器类型，当模式匹配成功时，返回构造器类型
type getInsatnceType<ConstructorType extends new (...args: any) => any> =
  ConstructorType extends new (...args: any) => infer InstanceType
    ? InstanceType
    : never
// type d1 = Person
type d1 = getInsatnceType<PersonConstructor>
