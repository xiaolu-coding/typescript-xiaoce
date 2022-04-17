// 类型参数 PrevArr 是代表之前的累加值的数组。类型参数 CurrentArr 时代表当前数值的数组。
// 类型参数 IndexArr 用于记录 index，每次递归加一，默认值是 []，代表从 0 开始。
// 类型参数 Num 代表求数列的第几个数。
// 判断当前 index 也就是 IndexArr['length'] 是否到了 Num，到了就返回当前的数值 CurrentArr['length']。
// 否则求出当前 index 对应的数值，用之前的数加上当前的数 [...PrevArr, ... CurrentArr]。
// 然后继续递归，index + 1，也就是 [...IndexArr, unknown]。
// 这就是递归计算 Fibinacci 数列的数的过程。
type fibonacciLoop<PrevArr extends unknown[], 
    CurrentArr extends unknown[], 
    IndexArr extends unknown[] = [], 
    Num extends number = 1> = IndexArr['length'] extends Num
  ? CurrentArr['length']
  : fibonacciLoop<CurrentArr, [...PrevArr, ...CurrentArr], [...IndexArr, unknown], Num>

type Fibonacci<Num extends number> = fibonacciLoop<[1], [], [], Num>
// type FibinacciResult = 55
type FibinacciResult = Fibonacci<10>
