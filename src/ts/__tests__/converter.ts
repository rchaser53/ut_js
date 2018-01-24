import { converter } from '../converter'

describe('parser type array', () => {
	test('ignore rows if element length is less than first element length', async () => {
		const input = `1	2	3
4	5	6`
		expect(converter(input)).toEqual([
      ['1', '2', '3'],
      ['4', '5', '6']
    ])
	})
})