type classPublicProps<Obj extends Record<string, any>> = {
  [Key in keyof Obj] : Obj[Key]
}


class Lu {
  public name: string
  protected age: number
  private hobbies: string[]

  constructor() {
    this.name = "dong"
    this.age = 20
    this.hobbies = ["sleep", "eat"]
  }
}
// type classPublicPropsResult = {
//   name: string
// }
type classPublicPropsResult = classPublicProps<Lu>
