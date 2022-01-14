const fizzBuzz = require("../src/fizzbuzz")

test('divisible_par_3_seulement', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
})
test('divisible_par_5_seulement', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
})
test('divisible_par_3_et_par_5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

