// 返回的是用 Arr 已有的元素前面加上 Ele 构造的新的元组类型。
type unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]
// type a2 = [0, 1, 2, 3]
type a2 = unshift<[1, 2, 3], 0>
