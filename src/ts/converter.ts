export const converter = (value: string): string[][] => {
  const rows = value.split('\n')
  if (rows.length === 1) return []
  
  return rows.map((elem) => {
    return elem.split('\t')
  })
}