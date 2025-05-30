import { getPizzaDetail } from "./index.ts";
console.log(getPizzaDetail("pepperoni")); // { id: 2, name: 'Pepperoni', price: 10 }
console.log(getPizzaDetail(3)); // { id: 3, name: 'Hawaiian', price: 10 }

console.log(getPizzaDetail("unknown")); // undefined
console.log(getPizzaDetail(true)); // undefined