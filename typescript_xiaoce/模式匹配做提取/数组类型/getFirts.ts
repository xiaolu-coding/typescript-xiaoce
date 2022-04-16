type arr = [1, 2, 3]
// 在这里对Arr进行模式匹配，把要提取的第一个元素的类型放到通过 infer 声明的 First 局部变量里
// 后面的元素可以使任何类型，因此用unknown接收 然后把局部变量First返回
type getFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never
// type a = 1
type a = getFirst<arr>
