import readlineSync from 'readline-sync'

// eslint-disable-next-line import/prefer-default-export
export const startGame = (rules, getData) => {
  console.log('Welcome to the Brain Games!')
  console.log(rules)
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  for (let i = 1; i <= 3; i += 1) {
    const [question, answer] = getData()
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    // eslint-disable-next-line eqeqeq
    if (userAnswer == answer) {
      console.log('Correct!')
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`)
      process.exit(0)
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
