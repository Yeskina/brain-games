install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint

brain-even:
	npm run babel-node -- src/bin/brain-even.js 

brain-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

brain-prime:
	npm run babel-node -- src/bin/brain-prime.js

brain-calc:
	npm run babel-node -- src/bin/brain-calc.js

brain-progression:
	npm run babel-node -- src/bin/brain-progression.js

brain-balance:
	npm run babel-node -- src/bin/brain-balance.js