const R = require('ramda');
const S = require('sanctuary');
const P = require('pointfree-fantasy');

// carbonation :: Int -> String -> Int -> Maybe String
const carbonation = (m, s, n) => n % m === 0 ? S.Just(s) : S.Nothing();

// fizzbuzz :: Int -> String
const fizzbuzz = n => S.fromMaybe(String(n), P.mconcat([carbonation(3, 'Fizz', n),
                                                        carbonation(5, 'Buzz', n)]));

R.map(R.compose(R.tap(console.log.bind(console)), fizzbuzz), R.range(0, 101));
