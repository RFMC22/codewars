//Hello, Name or World!
function hello(name) {
  if(name)
    {
     let n = name.charAt(0).toUpperCase();
     let na = name.slice(1).toLowerCase();
     let completeName = n + na;
     return `Hello, ${completeName}!`; 
    }else{
      return `Hello, World!`;
    }
}