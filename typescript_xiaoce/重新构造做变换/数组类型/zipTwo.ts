// 分别提取出One和Other的前后两个值，然后返回就行
type zipTwo<One extends [unknown, unknown], Other extends [unknown, unknown]> = 
  One extends [infer OneFirst, infer OneLast] 
  ? Other extends [infer OtherFirst, infer OtherLast] 
    ? [[OneFirst, OtherFirst], [OneLast, OtherLast]] 
    : [] 
  : []

type tuple1 = [1, 2]
type tuple2 = ["xiao", "lu"]
// type tuple3 = [[1, "xiao"], [2, "lu"]]
type tuple3 = zipTwo<tuple1, tuple2>
