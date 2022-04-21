// 注意，这里用的是更具体，而不是更多。
type res = 'a' | 'b' extends 'a' | 'b' | 'c' ? true : false
// 'a' | 'b' 更具体
