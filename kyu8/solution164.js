//Training JS #4: Basic data types--Array
let getLength = (arr) => arr.length;
let getFirst = (arr) => arr[0];
let getLast = (arr) => arr[arr.length - 1];
let pushElement = (arr) => {
  arr.push(1);
  return arr;
};
let popElement = (arr) => {
  arr.pop();
  return arr;
};