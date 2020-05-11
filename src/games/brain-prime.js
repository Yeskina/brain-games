import selfRandom from '../helper'

import { startGame } from '../index'

const getData = () => {
  const question = selfRandom(1, 100)

  // eslint-disable-next-line consistent-return
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
    return num > 1;
  }

  const answer = isPrime(question) ? 'yes' : 'no'

  return [question, answer]
}
export default () => startGame('Answer "yes" if number is prime otherwise answer "no".', getData)
