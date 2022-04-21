interface Person {
  name: string
  age: number
}

interface Lu {
  name: string
  age: number
  hobbies: string[]
}

let person: Person = {
  name: '',
  age: 20
}

let lu: Lu = {
  name: '',
  age: 18,
  hobbies: ['sing', 'dance']
}
// 协变，lu是子类型，person是父类型，子类型可以赋值给父类型
person = lu
