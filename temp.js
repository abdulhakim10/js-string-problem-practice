let first = 5;
let second = 7;

console.log(first, second);

// wrong approch
// first = second;
// second = first;

// right approch 1

// const temp = first;
// first = second;
// second = temp;

// right approch 2 Destructuring.

[first, second] = [second, first];

console.log(first, second);