interface Xiaolu {
  name: string,
  sex: string
}

let xiaolu: Xiaolu = {
  name: 'xiaolu',
  sex: '男'
}
// 不变
// 非父子类型之间不会发生型变，只要类型不一样就会报错
xiaolu = lu
