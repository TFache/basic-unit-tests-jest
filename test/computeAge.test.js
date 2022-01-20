const computeAge = require('../src/computeAge')

const birthday = new Date(1999,11,19)
const dateAfterBirthday = new Date(2022,11,29)
test('age_valide', () => {
    expect(computeAge(birthday,dateAfterBirthday)).toBe(23)
})
