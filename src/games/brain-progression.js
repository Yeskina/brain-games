import selfRandom from '../helper'

import { startGame } from '../index'

const getData = () => {
  const step = selfRandom(1, 15)
  const dotsIndex = selfRandom(0, 8)
  const array = Array(9)
    .fill(selfRandom(1, 300))
    .map((number, index) => (index === dotsIndex ? '..' : number + (step * index)))
  const question = array.join(' ')
  const progression = (arr) => arr[dotsIndex - 1] + step
  const answer = progression(array)

  return [question, answer]
}

export default () => startGame('What number is missing in this progression?', getData)
