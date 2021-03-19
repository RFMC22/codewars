//Sleigh Authentication 
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if(name.includes('Santa Claus') && password.includes('Ho Ho Ho!')){
    return true;
  }else{{
    return false;
  }}
};