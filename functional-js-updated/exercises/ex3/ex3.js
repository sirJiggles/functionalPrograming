function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

function compose(...args) {
  return function(val) {
    return [...args].reduceRight(function(prev, next) {
      return next(prev);
    }, val);
  };
}
function pipe(...args) {
  return function(val) {
    return args.reduce(function(prev, next) {
      return next(prev);
    }, val);
  };
}

var f = compose(
  decrement,
  double,
  increment,
  half
);
var p = pipe(
  half,
  increment,
  double,
  decrement
);

console.log(f(3) === 4);
// true

console.log(f(3));
console.log(p(3));
console.log(f(3) === p(3));
