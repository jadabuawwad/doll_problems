
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = (romanNumeral) => {
  if (typeof (romanNumeral) !== 'string') {
    return null
  }
  if (romanNumeral === '') {
    return 0
  }
  let number = 0
  for (let i = romanNumeral.length - 1; i > -1; i--) {
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      number -= DIGIT_VALUES[romanNumeral[i]];
    } else {
      number += DIGIT_VALUES[romanNumeral[i]];
    }
  }
  return number
}