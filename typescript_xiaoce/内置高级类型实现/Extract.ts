type Extract1<T, U> = T extends U ? T : never
// type a12 = "a"
type a12 = Extract1<'a' | 'b' | 'c', 'a' | 'e'>
