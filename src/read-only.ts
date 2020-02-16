export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ken');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
