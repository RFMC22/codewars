//Define a card suit
let n= ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
let a = {}
for (const x of n) {
  a[x+'♣'] = 'clubs';
  a[x+'♦'] = 'diamonds';
  a[x+'♥'] = 'hearts';
  a[x+'♠'] = 'spades';
}
function defineSuit(card) {
  return a[card];
}