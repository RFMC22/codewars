//Be Concise I - The Ternary Operator

//first solution
let describeAge=a=>{let m="You're a(n) ";return a<=12?m+"kid":a>=13&&a<=17?m+"teenager":a>=18&&a<=64?m+"adult":m+"elderly"}

//second solution
let describeAge=a=>`You're a(n) ${a<=12?'kid':a>=13&&a<=17?'teenager':a>=18&&a<=64?'adult':'elderly'}`;

//third solution
let describeAge=a=>`You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`;