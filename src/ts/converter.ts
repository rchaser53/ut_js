export const converter = (value: string): string[] => {
  const rows = value.split("\n")

  const retValue = rows.reduce<string[]>((stack, next) => {
    const trimedNext = trimStartAndEndWhiteSpace(next)
    if (isEmptyRow(trimedNext)) return stack;
    return trimedNext === ""
      ? stack
      : stack.concat(trimedNext.split("\t").reduce(removeEmptyReduce, []));
  }, []);

  return trimLastLine(retValue);
};

const trimStartAndEndWhiteSpace = (value: string): string => {
  return value.replace(/^\s*/, '').replace(/\s*$/, '')
}

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
