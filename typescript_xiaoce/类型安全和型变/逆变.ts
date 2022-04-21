let printHobbies: (lu: Lu) => void

printHobbies = (lu) => {
  console.log(lu.hobbies)
}

let printName: (person: Person) => void

printName = (person) => {
  console.log(person.name)
}
// 逆变
// 因为这个函数调用的时候是按照 Guang 来约束的类型，但实际上函数只用到了父类型 Person 的属性和方法，当然不会有问题，依然是类型安全的。
// 这就是逆变，函数的参数有逆变的性质（而返回值是协变的，也就是子类型可以赋值给父类型）。
// Hobbies
printHobbies = printName
printName = printHobbies
