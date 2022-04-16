type arr4 = [1, 2, 3]
// 对剩余元素进行模式匹配，使用局部变量 Rest 存取
// 返回 Rest 变量
type shiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer Rest] ? Rest : never
// type a4 = [2, 3]
type a4 = shiftArr<arr4>
