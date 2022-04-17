// 联合类型不需要递归
type camelcaseUnion<Item extends string> = Item extends `${infer Left}_${infer Right}${infer Rest}`
  ? `${Left}${Uppercase<Right>}${camelcaseUnion<Rest>}`
  : Item
// type camelcaseUnionResult = "aaAaAa" | "bbBbBb" | "ccCcCc"
type camelcaseUnionResult = camelcaseUnion<'aa_aa_aa' | 'bb_bb_bb' | 'cc_cc_cc'>
