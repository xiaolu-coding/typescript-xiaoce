// 使用ConstructorParameters做模式匹配，使用infer声明的局部变量ParametersType保存构造器参数类型，当模式匹配成功时，返回构造器参数类型
type getConstructorParameters<ConstructorType extends new (...args: any[]) => any> = 
  ConstructorType extends new (...args: infer ParametersType) => any 
  ? ParametersType
  : never

interface PersonConstructor {
  new (name: string): Person
}
// type d2 = [name: string]
type d2 = getConstructorParameters<PersonConstructor>
