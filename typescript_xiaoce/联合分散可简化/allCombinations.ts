type AllCombinations<A extends string, B extends string = A> = A extends A
  ? Combination<A, AllCombinations<Exclude<B, A>>>
  : never

type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;
// type AllCombinationsResult = "A" | "B" | "C" | "BC" | "CB" | "AB" | "AC" | "ABC" | "ACB" | "BA" | "CA" | "BCA" | "CBA" | "BAC" | "CAB"
type AllCombinationsResult = AllCombinations<'A' | 'B' | 'C'>;
