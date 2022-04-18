// 使用模式匹配提取出排除的类型
type Excludes1<T, U> = T extends U ? never : T
// type a11 = "b" | "c"
type a11 = Excludes1<'a' | 'b' | 'c', 'a' | 'e'>
