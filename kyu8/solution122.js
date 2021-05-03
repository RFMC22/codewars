//Regular Ball Super Ball
class Ball{
  constructor(name = 'regular')
  {
    this.name = name;
  }
  get ballType()
  {
    return this.name;
  }
}