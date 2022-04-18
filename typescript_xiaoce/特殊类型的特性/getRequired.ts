type isRequired<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key>
  ? never
  : Key

type getRequired<Obj extends Record<string, any>> = {
  [Key in keyof Obj as isRequired<Key, Obj>]: Obj[Key]
}
// type getRequiredResult = {
//   name: string
// }
type getRequiredResult = getRequired<{
  name: string
  age?: number
}>
