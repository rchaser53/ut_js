const targetValue = `1	2	3
4	5	6`

export const converter = (value: string): string[][] => {
  return value.split('\n').map((elem) => {
    return elem.split('\t')
  })
}

console.log(
  converter(targetValue)
)