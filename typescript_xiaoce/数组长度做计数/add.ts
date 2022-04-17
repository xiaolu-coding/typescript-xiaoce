// 使用数组长度做计数，通过buildArray构建相对应长度的unkown数组，然后通过扩展两数组，构建新的数组，返回length值，也就是Add的结果
type add<Num1 extends number, Num2 extends number> = [...buildArray<Num1>, ...buildArray<Num2>]['length']

// type addResult = 67
type addResult = add<35, 32>

type buildArray<Length extends Number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length 
  ? Arr
  : buildArray<Length, Ele, [...Arr, Ele]>
