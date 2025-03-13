import Team from "./Team.js";
import { canIterate } from "./utils.js";

const team = new Team();
team.add({
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});
team.add({
  name: "Маг",
  type: "Magician",
  health: 30,
  level: 1,
  attack: 60,
  defence: 5,
});

for (const char of team) {
  console.log(char);
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true
