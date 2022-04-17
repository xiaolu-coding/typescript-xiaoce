// 乘法其实是递归的加法，所以可以用递归来做，每加一次,Num2数组长度减一，创建一个Num1长度的数组放入ResultArr，直到Num2为0，返回ResultArr的length
type mutiply<Num1 extends number, Num2 extends number, ResultArr extends unknown[] = []> = Num2 extends 0 
  ? ResultArr['length']
  : mutiply<Num1, subtract<Num2, 1>, [...buildArray<Num1>, ...ResultArr]>
// type mutiplyResult = 1120
type mutiplyResult = mutiply<35, 32>
