type arr3 = [1, 2, 3]
// 匹配剩余的元素，把剩余的元素放到通过 infer 声明的 Rest 局部变量里
// 最后一个元素可以使用任何类型，用unknown接收，然后把局部变量Rest返回
type popArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never
// type a3 = [1, 2]
type a3 = popArr<arr3>
