const mergeSortedArrays = require('../src/mergeSortedArrays')

test("test_exemple_du_sujet", () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4])).toStrictEqual([1, 2, 3, 4, 5])
})
