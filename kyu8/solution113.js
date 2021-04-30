//My head is at the wrong end!
function fixTheMeerkat(arr) {
  let right  = arr.shift();
  let left = arr.pop();
  arr.push(right);
  arr.unshift(left);
  return arr;
}