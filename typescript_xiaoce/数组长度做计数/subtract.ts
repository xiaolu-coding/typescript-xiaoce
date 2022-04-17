// 通过buildArray<Num1>做模式匹配，通过模式匹配提取出 Num2 长度个元素，剩下的放到 infer 声明的局部变量 Rest 里。
type subtract<Num1 extends number, Num2 extends number> = buildArray<Num1> extends [...arr1: buildArray<Num2>, ...arr2: infer Rest] 
  ? Rest['length']
  : never
// type subtractResult = 3
type subtractResult = subtract<35, 32>
