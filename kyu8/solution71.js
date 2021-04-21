// Color Ghost
class Ghost{
  get color(){
    const colors = ['white', 'yellow', 'purple', 'red'];
    const rcolor = Math.floor(Math.random() * colors.length);
    return  colors[rcolor];
  }
}
