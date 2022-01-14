const fizzBuzz = require("../src/fizzbuzz")

test('divisible_par_3_seulement', () => {
    expect(fizzBuzz(63)).toBe("Fizz")
})
test('divisible_par_5_seulement', () => {
    expect(fizzBuzz(125)).toBe("Buzz")
})
test('divisible_par_3_et_par_5', () => {
    expect(fizzBuzz(135)).toBe("FizzBuzz")
})
test('divisible_ni_par_3_ni_par_5', () => {
    expect(fizzBuzz(136)).toBe(undefined)
})

