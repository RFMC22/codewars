//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    return this.split('').map(text=>{
      if(text.toLowerCase() === text){
      return text.toUpperCase();
      }
      return text.toLowerCase();
    }).join('');
}