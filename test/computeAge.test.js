const computeAge = require('../src/computeAge')

const birthday = new Date(1999,11,19)
const dateAfterBirthday = new Date(2022,11,29)
const dateBeforeBirthday = new Date(1979, 1, 12)

test('age_valide', () => {
    expect(computeAge(birthday,dateAfterBirthday)).toBe(23)
})

test('anniversaire_dans_le_futur', () => {
    expect(computeAge(birthday,dateBeforeBirthday)).toBe("birthday in the future compared to currentDate.")
})

test('date_non_valide', () => {
    expect(computeAge(birthday,45)).toBe("One or both parameters are not dates.")
})
