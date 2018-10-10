function bar(x, y) {
  let z;
  foo(x);
  return [x, y];

  function foo(x) {
    y++;
    z = x * y;
  }
}

bar(20, 5);

bar(25, 6);
