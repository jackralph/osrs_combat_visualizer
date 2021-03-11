const {
    effectiveLevel,
    potionBoost,
    maxHit,
    maxAttackRoll
} = require('../../resources/js/utils/combat-calc')

describe("Calculating Max Hit", () => {
    describe("effectiveLevel()", () => {
        test("returns the effective level of a skill", () => {
            // strength effective level according to osrsbox calculations
            expect(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0)).toBe(153);
            // defence effective level according to osrsbox calculations
            expect(effectiveLevel(135, 0, 1, 1)).toBe(144);
        });
    });
    describe("maxHit()", () => {
        test("returns the max hit", () => {
            // max hit using stats and calculation from osrsbox
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 133, 1.1667)).toBe(54);
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1)).toBe(35);
            // slayer helm on task / salve amulet against undead
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1.1667)).toBe(40);
            // salve amulet(e) against undead
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1.2)).toBe(42);
            // void
            expect(maxHit(effectiveLevel(99, potionBoost(99, 5, 0.15), 1.23, 0), 82, 1.1, true)).toBe(38);
        });
    });
    describe("maxAttackRoll()", () => {
        test("returns the max attack roll", () => {
            // max attack roll according 
            expect(maxAttackRoll(effectiveLevel(97, potionBoost(97, 5, 0.15), 1.20, 3), 136, 1)).toBe(30000);
            expect(maxAttackRoll(effectiveLevel(97, potionBoost(97, 5, 0.15), 1.20, 3), 136, 1.1)).toBe(33000);
            expect(maxAttackRoll(effectiveLevel(97, potionBoost(97, 5, 0.15), 1.20, 3), 136, 1.2)).toBe(36000);
            // slayer helm max attack roll
            expect(maxAttackRoll(effectiveLevel(97, potionBoost(97, 5, 0.15), 1.20, 3), 136, 1.1667)).toBe(35000);
        });
    });
});