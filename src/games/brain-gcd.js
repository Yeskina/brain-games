
import selfRandom from '../helper'

import { startGame } from '../index'

const nod = (a, b) => {
  if (b > 0) {
    const number = a % b
    return nod(b, number)
  }
  return Math.abs(a)
}

const getData = () => {
  const num1 = selfRandom(1, 100)
  const num2 = selfRandom(1, 100)
  const question = `${num1}, ${num2}`
  const answer = nod(num1, num2)

  return [question, answer]
}

export default () => startGame('Find the greatest common divisor of given numbers.', getData)
