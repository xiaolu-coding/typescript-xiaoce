// any 类型与任何类型的交叉都是 any，也就是 1 & any 结果是 any。
type isAny<T> = 'xiao' extends ('lu' & T) ? true : false
// type isAnyResult = true
type isAnyResult = isAny<any>
