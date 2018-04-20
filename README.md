# V-LordChess

> A chess game with VueJs!

## Backlog

* Apply rules for pieces:
  ```bash
  # not to be possible to capture pieces from same player
  # possible/colored tiles only if no piece is in the way (only for pawn ,rook, queen and bishop)
  # not move back, if pawn
  # special movements (an passant, castling)
  ```
* Place grid at boardside ([1, 2, ..., 8] & [a, b, ..., h])
* Develop interface (think about responsiveness and touch support? idk, maybe)
* Create your own board piece placement (for training purposes)
* Develop artificial inteligence to game against
* Implement more skins (or even make it more visually apealling)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
