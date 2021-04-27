//Logical calculator
function logicalCalc(array, op){
  switch(op)
    {
        case 'AND': return array.reduce((acc,val) => acc && val);
        case 'OR': return array.reduce((acc,val) => acc || val);
        case 'XOR': return array.reduce((acc,val) => acc !== val);
    }
}