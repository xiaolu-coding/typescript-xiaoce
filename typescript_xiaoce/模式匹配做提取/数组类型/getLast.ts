type arr2 = [1, 2, 3]
// 通过对Arr进行模式匹配，把要提取的最后一个元素的类型放到通过 infer 声明的 Last 局部变量里
// 前面的元素可以使用任何类型，使用 unknown 接收， 将局部变量 Last 返回
type getLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never
// type a2 = 3
type a2 = getLast<arr2>
