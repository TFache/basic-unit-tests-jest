const mergeSortedArrays = require('../src/mergeSortedArrays')

test("test_exemple_du_sujet", () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4])).toStrictEqual([1, 2, 3, 4, 5])
})

test("une_entree_non_tableau_renvoie_erreur", () => {
    expect(mergeSortedArrays("test", [2, 4])).toBe("One or both parameter must be array")
})
