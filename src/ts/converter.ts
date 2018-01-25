export const converter = (value: string): string[] => {
  const rows = value.split("\n");

  const retValue = rows.reduce<string[]>((stack, next) => {
    if (isEmptyRow(next)) return stack;
    return next === ""
      ? stack
      : stack.concat(next.split("\t").reduce(removeEmptyReduce, []));
  }, []);

  return trimLastLine(retValue);
};

const removeEmptyReduce = (stack: string[], next: string): string[] => {
  return next === "" ? stack : stack.concat([next]);
};

const isEmptyRow = (str: string): boolean => {
  return str.match(/^\s*$/) !== null;
};

export const trimLastLine = (rows: string[]): string[] => {
  if (rows.length <= 1) return rows;
  const lastElement = rows.pop() as string;
  return lastElement.match(/^\s*$/) === null
    ? rows.concat([lastElement])
    : rows;
};
