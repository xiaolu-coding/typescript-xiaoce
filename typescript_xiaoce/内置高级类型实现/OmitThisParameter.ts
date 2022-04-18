type OmitThisParameter1<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
    ? (...args: A) => R
    : T

interface Person {
  name: string,
}

function say(this: Person, age: number) {
  console.log(this.name)
  return this.name + '' + age
}
// type a5 = (age: number) => string
type a5 = OmitThisParameter1<typeof say>
