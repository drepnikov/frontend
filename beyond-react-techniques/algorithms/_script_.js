function Foo(nums) {
  return Array(...new Set(nums));
}

console.log(Foo([1, 2, 3, 4, 5, 5, 6]));
