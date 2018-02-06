import { converter } from "../converter";

describe("converter", () => {
  test("convert values having new line to array in array", async () => {
    const input = `1	2	3
4	5	6`;
    expect(converter(input)).toEqual(["1", "2", "3", "4", "5", "6"]);
  });

  test("convert values having new line to empty array", async () => {
    const input = ``;
    expect(converter(input)).toEqual([]);
  });

  test("convert single values to array having single value", async () => {
    const input = `1`;
    expect(converter(input)).toEqual(["1"]);
  });

  test("ignore last line empty value", async () => {
    const input = `1
		`;
    expect(converter(input)).toEqual(["1"]);
  });

  test("ignore empty row", async () => {
    const input = `1
		2
		
		3`;
    expect(converter(input)).toEqual(["1", "2", "3"]);
  });

  test("distinguish space from tab", async () => {
    const input = `	1	2 3	4 	
5`;
    expect(converter(input)).toEqual(["1", "2 3", "4", "5"]);
  });

  test("remove unnecessary space", async () => {
    const input = ` 1	2 3	4 	
5`;
    expect(converter(input)).toEqual(["1", "2 3", "4", "5"]);
  });


  test("remove unnecessary space", async () => {
    const input = ` 1	2 3	4 	
5



`;
    expect(converter(input)).toEqual(["1", "2 3", "4", "5"]);
  });


});
