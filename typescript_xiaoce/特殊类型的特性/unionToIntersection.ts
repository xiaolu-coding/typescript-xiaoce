type unionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never
// type unionToIntersectionResult = {
//   xiao: 1
// } & {
//   lu: 2
// }
type unionToIntersectionResult = unionToIntersection<{xiao: 1} | {lu: 2}>
