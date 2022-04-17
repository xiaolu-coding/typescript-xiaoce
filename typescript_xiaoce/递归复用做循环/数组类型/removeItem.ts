// 使用Arr做模式匹配，使用infer声明的First表示第一个元素，Rest表示剩余元素，模式匹配成功时，判断First和Item是否相等，如果相等，递归的参数Result不带上First，如果不相等，将First放进Result递归
type removeItem<Arr extends unknown[], Item, Result extends unknown[] = []> = Arr extends [infer First, ...infer Rest] 
  ? IsEqual<First, Item> extends true 
    ? removeItem<Rest, Item, Result>
    : removeItem<Rest, Item, [...Result, First]>
  : Result 
// type removeItemResult = [1, 2, 4, 5]
type removeItemResult = removeItem<[1, 2, 3, 4, 5, 3], 3>
