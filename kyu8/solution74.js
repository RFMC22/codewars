//Convert number to reversed array of digits
function digitize(n) {
  return Array.from(String(n),Number).reverse();
}