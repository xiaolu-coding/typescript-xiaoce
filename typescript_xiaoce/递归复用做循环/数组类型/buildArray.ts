// 使用Arr['length']做模式匹配，匹配成功返回Arr数组，如果不成功，递归buildArray给Arr添加一个元素
type buildArray<Length extends Number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length 
  ? Arr
  : buildArray<Length, Ele, [...Arr, Ele]>
// type buildArrayResult = [number, number, number]
type buildArrayResult = buildArray<3, number>
