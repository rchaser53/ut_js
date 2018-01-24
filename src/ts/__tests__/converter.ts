import { converter } from '../converter'

describe('converter', () => {
	test('convert values having new line to array in array', async () => {
		const input = `1	2	3
4	5	6`
		expect(converter(input)).toEqual([
      ['1', '2', '3'],
      ['4', '5', '6']
    ])
  })
  
	test('convert values having new line to empty array', async () => {
		const input = ``
		expect(converter(input)).toEqual([])
	})
})