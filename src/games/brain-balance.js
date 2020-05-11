import selfRandom from '../helper'

import { startGame } from '../index'

const getData = () => {
  const balanceNum = (number) => {
    const digitsArr = String(number)
      .split('')
      .map((num) => Number(num))
    const min = Math.min(...digitsArr)
    const max = Math.max(...digitsArr)

    if (max - min < 2) {
      return digitsArr.sort((a, b) => a - b).join('')
    }

    digitsArr[digitsArr.indexOf(min)] = min + 1
    digitsArr[digitsArr.indexOf(max)] = max - 1

    return balanceNum(digitsArr.join(''))
  }

  const question = selfRandom(0, 5000)

  const answer = balanceNum(question)

  return [question, answer]
}

export default () => startGame('Balance the given number.', getData)
