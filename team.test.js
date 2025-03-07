const { Team, canIterate } = require("./task");

describe("Team class", () => {
  test("Team should be iterable", () => {
    const team = new Team();
    const char1 = {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
    const char2 = {
      name: "Маг",
      type: "Magician",
      health: 30,
      level: 1,
      attack: 60,
      defence: 5,
    };

    team.add(char1);
    team.add(char2);

    const result = [...team];
    expect(result).toEqual([char1, char2]);
  });
});

describe("canIterate function", () => {
  test("should return true for iterable objects", () => {
    expect(canIterate(new Map())).toBe(true);
    expect(canIterate(new Set())).toBe(true);
    expect(canIterate("Netology")).toBe(true);
  });

  test("should return false for non-iterable objects", () => {
    expect(canIterate(null)).toBe(false);
    expect(canIterate(10)).toBe(false);
    expect(canIterate({})).toBe(false);
  });
});
