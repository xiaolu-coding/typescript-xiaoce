// 使用Arr做模式匹配，使用infer声明的First代表第一个元素，Rest代表剩下的元素，如果模式匹配成功，将First放在最后，再对Rest递归调用reverseArr，递归结束后，反序完成
type reverseArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest] ? [...reverseArr<Rest>, First] : Arr
// type reverseArrResult = [5, 4, 3, 2, 1]
type reverseArrResult = reverseArr<[1, 2, 3, 4, 5]>
