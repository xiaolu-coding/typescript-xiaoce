// 使用T做模式匹配，将this类型保存到用infer声明的局部变量ThisType中，当模式匹配成功时，返回this类型
type getThisParameterType<T> = T extends (this: infer ThisType, ...args: any[]) => any ? ThisType : never

class Lu {
  name: string

  constructor() {
    this.name = 'xiaolu'
  }

  hello(this: Lu) {
    return 'hello,' + this.name
  }
}

const lu = new Lu()
// type c3 = Lu
type c3 = getThisParameterType<typeof lu.hello>
