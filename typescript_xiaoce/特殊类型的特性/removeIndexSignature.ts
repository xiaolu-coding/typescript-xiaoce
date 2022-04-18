type removeIndexIndexSignature<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]
  : Obj[Key]
}
// type removeIndexIndexSignatureResult = {
//   sleep: () => void
// }
type removeIndexIndexSignatureResult = removeIndexIndexSignature<{
  [key: string]: any
  sleep(): void
}>
