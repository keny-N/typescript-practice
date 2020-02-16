export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Daimajin: Pitcher1 = {
  throwingSpeed: 154
};

const Batterkun: Batter1 = {
  battingAverage: 0.322
};

// type TwowayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwowayPlayer = Pitcher1 & Batter1;

const Twowaykun: TwowayPlayer = {
  throwingSpeed: 166,
  battingAverage: 0.321
};
