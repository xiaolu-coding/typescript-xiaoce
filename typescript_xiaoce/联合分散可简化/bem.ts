// 通过Element[number]将数组转为联合类型
type bem<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`
// type bemResult =
//   | "block__element--modifier"
//   | "block__element--modifier2"
//   | "block__element2--modifier"
//   | "block__element2--modifier2"
type bemResult = bem<'block', ['element', 'element2'], ['modifier', 'modifier2']>
