// 我们往一个数组类型中不断放入元素取长度，如果先到了 A，那就是 B 大，否则是 A 大
// 如果 Num1 extends Num2 成立，代表相等，直接返回 false。
// 否则判断计数数组的长度，如果先到了 Num2，那么就是 Num1 大，返回 true。
// 反之，如果先到了 Num1，那么就是 Num2 大，返回 false。
// 如果都没到就往计数数组 CountArr 中放入一个元素，继续递归。
type greaterThan<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> = Num1 extends Num2
  ? false
  : CountArr['length'] extends Num2
    ? true
    : CountArr['length'] extends Num1 
      ? false
      : greaterThan<Num1, Num2, [unknown, ...CountArr]>
// type greaterThanResult = true
type greaterThanResult = greaterThan<35, 32>
