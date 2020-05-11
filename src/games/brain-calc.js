import selfRandom from '../helper'

import { startGame } from '../index'

const getData = () => {
  const num1 = selfRandom(1, 100)
  const num2 = selfRandom(1, 100)

  const arr = ['-', '+', '*']
  const randomSign = arr[selfRandom(0, 2)]
  const question = `${num1} ${randomSign} ${num2}`
  let answer = null

  if (randomSign === '+') {
    answer = num1 + num2
  } else if (randomSign === '-') {
    answer = num1 - num2
  } else if (randomSign === '*') {
    answer = num1 * num2
  }

  return [question, answer]
}
export default () => startGame('What is the result of the expression?', getData)
