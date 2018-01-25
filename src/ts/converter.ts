export const converter = (value: string): string[] => {
  const rows = value.split('\n');

  return rows.reduce<string[]>((stack, next) => {
    return next === ''
            ? stack
            : stack.concat(next.split('\t'))
  }, []);
  
}