//8kyu interpreters: HQ9+
function HQ9(code) {
  let start = '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.';
  switch(code)
    {
        case 'H': return 'Hello World!';
        case 'Q': return code;
        case '9':
        for (let i = 98; i >= 2; i--) {
          start = start + '\n'+ i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ';
          if (i-1 == 1) {
            start = start + (i-1) + ' bottle of beer on the wall.\n'+ (i-1) + ' bottle of beer on the wall, ' + (i-1) + ' bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
          }
          else if (i > 1) {
            start = start + (i-1) + ' bottles of beer on the wall.';
          }
        }
        return start;
      default : return undefined;
    }
}