export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hi';

type profile = {
  name: string;
  age: number;
};

const example1 = {
  name: 'ken',
  age: 23
};

type profile2 = typeof example1;
