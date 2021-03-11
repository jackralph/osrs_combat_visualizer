const {
    effectiveLevel,
    potionBoost,
    maxHit
} = require('../../resources/js/utils/combat-calc')

describe("Calculating Max Hit", () => {
    describe("effectiveLevel()", () => {
        test("returns the effective level of a skill", () => {
            expect(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0)).toBe(153)
        });
    });
    describe("maxHit()", () => {
        test("returns the max hit", () => {
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1)).toBe(35);
            // slayer helm on task / salve amulet against undead
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1.1667)).toBe(40);
            // salve amulet(e) against undead
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1.2)).toBe(42);
            // void
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1.1, true)).toBe(38);
        });
    });
});