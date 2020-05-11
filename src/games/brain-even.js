import selfRandom from '../helper'

import { startGame } from '../index'

const getData = () => {
  const question = selfRandom(1, 100)
  const answer = question % 2 === 0 ? 'yes' : 'no'

  return [question, answer]
}

export default () => startGame('Answer "yes" if number even otherwise answer "no".', getData)
