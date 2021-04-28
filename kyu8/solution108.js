//Is there a vowel in there?
function isVow(a){
    for(let i = 0; i < a.length; i++)
      {
        a[i] === 97  ? a[i] = 'a' :
        a[i] === 101 ? a[i] = 'e' :
        a[i] === 105 ? a[i] = 'i' :
        a[i] === 111 ? a[i] = 'o' :
        a[i] === 117 ? a[i] = 'u' : '';
      }
    return a;
}
