// 返回的是用 Arr 已有的元素加上 Ele 构造的新的元组类型。
type Push<Arr extends unknown[], Ele> = [...Arr, Ele]
// type a = [1, 2, 3, 4]
type a = Push<[1, 2, 3], 4>
