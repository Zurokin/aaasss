class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

function canIterate(obj) {
  return obj != null && typeof obj[Symbol.iterator] === "function";
}

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

module.exports = { Team, canIterate };

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true
