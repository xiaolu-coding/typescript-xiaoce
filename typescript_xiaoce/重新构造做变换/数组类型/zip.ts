// 如果大于两个，就提取第一个，然后后面的递归
type zip<One extends unknown[], Other extends unknown[]> = One extends [infer OneFirst, ...infer OneRest] 
  ? Other extends [infer OtherFirst, ...infer OtherRest] 
    ? [[OneFirst, OtherFirst], ...zip<OneRest, OtherRest>] 
    : [] 
  : []

type tuple4= [1, 2, 3]
type tuple5 = ["xi", 'ao',"lu"]
// type tuple6 = [[1, "xi"], [2, "ao"], [3, "lu"]]
type tuple6 = zip<tuple4, tuple5>
