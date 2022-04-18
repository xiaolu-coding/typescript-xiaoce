type isEqual1<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
// type isEqual1Result = true
type isEqual1Result = isEqual1<string, string>
