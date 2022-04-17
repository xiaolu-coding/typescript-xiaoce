// 递归的减法，Num1/Num2，其实就是Num1减一次Num2，CountArr加一，直到Num1为0，返回CountArr的length
type divide<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> = Num1 extends 0 
  ? CountArr['length']
  : divide<subtract<Num1, Num2>, Num2, [unknown, ...CountArr]>
// type divideResult = 8
type divideResult = divide<32, 4>
