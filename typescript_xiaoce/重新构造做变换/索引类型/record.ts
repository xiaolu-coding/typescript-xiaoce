type record<K extends string | number | symbol, T> = {
  [P in K ] : T
}

