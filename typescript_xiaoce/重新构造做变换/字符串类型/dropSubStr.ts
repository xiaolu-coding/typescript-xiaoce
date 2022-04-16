// 使用Str做模式匹配，使用Pre和Post表示SubStr左右两边，如果匹配，将左右两边拼接，再递归执行
type dropSubStr<Str extends string, SubStr extends string> = Str extends `${infer Pre}${SubStr}${infer Post}` 
  ? dropSubStr<`${Pre}${Post}`, SubStr> 
  : Str
// type a3 = "xia_lu_k"
type a3 = dropSubStr<"xiao_lu_ok", "o">
