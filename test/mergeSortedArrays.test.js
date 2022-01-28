const mergeSortedArrays = require('../src/mergeSortedArrays')

test("test_exemple_du_sujet", () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4])).toStrictEqual([1, 2, 3, 4, 5])
})

test("une_entree_non_tableau_renvoie_erreur", () => {
    expect(mergeSortedArrays("test", [2, 4])).toBe("One or both parameter must be array")
})

test("une_valeur_se_repete", () => {
    expect(mergeSortedArrays([1, 3, 5], [3, 4])).toStrictEqual([1, 3, 3, 4, 5])
})

test("un_parametre_est_tableau_vide", () => {
    expect(mergeSortedArrays([1, 3, 5], [])).toStrictEqual([1, 3, 5])
})
