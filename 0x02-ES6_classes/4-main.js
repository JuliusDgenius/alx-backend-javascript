import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
const q = Pricing.convertPrice(100, 0.5);
console.log('Converted price', q);
console.log(p);
console.log(p.displayFullPrice());
