export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'ken';
  static lastName: string = 'naka';

  static work() {
    // return 'Hey,guys! ';
    return `Hey,guys! ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
