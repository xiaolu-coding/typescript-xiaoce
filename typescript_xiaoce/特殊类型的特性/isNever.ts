type isNever<T> = [T] extends [never] ? true : false
// type inNeverResult = true
type inNeverResult = isNever<never>
