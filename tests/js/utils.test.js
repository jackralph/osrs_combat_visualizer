const {
    effectiveLevel,
    potionBoost,
    maxHit,
    maxAttackRoll,
    maxDefenceRoll,
    hitChance,
    damagePerSecond
} = require('../../resources/js/utils/combat-calc')

const player = {
    attackLevel: 97,
    strengthLevel: 99
}

const abyssalDemon = {
    defenceLevel: 135
}

describe("Calculating Damage", () => {

    const { attackLevel, strengthLevel } = player;
    const { defenceLevel } = abyssalDemon;

    describe("effectiveLevel()", () => {
        test("returns the effective level of a skill", () => {
            // strength effective level according to osrsbox calculations
            expect(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0)).toBe(153);
            // defence effective level according to osrsbox calculations
            expect(effectiveLevel(135, 0, 1, 1)).toBe(144);
        });
    });
    describe("maxHit()", () => {
        test("returns the max hit", () => {
            // max hit using stats and calculation from osrsbox
            expect(maxHit(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0), 133, 1.1667)).toBe(54);
            expect(maxHit(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0), 82, 1)).toBe(35);
            // slayer helm on task / salve amulet against undead
            expect(maxHit(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0), 82, 1.1667)).toBe(40);
            // salve amulet(e) against undead
            expect(maxHit(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0), 82, 1.2)).toBe(42);
            // void
            expect(maxHit(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0), 82, 1.1, true)).toBe(38);
        });
    });
    describe("maxAttackRoll()", () => {
        test("returns the max attack roll", () => {
            // max attack roll according 
            expect(maxAttackRoll(effectiveLevel(attackLevel, potionBoost(attackLevel, 5, 0.15), 1.20, 3), 136, 1)).toBe(30000);
            expect(maxAttackRoll(effectiveLevel(attackLevel, potionBoost(attackLevel, 5, 0.15), 1.20, 3), 136, 1.1)).toBe(33000);
            expect(maxAttackRoll(effectiveLevel(attackLevel, potionBoost(attackLevel, 5, 0.15), 1.20, 3), 136, 1.2)).toBe(36000);
            // slayer helm max attack roll
            expect(maxAttackRoll(effectiveLevel(attackLevel, potionBoost(attackLevel, 5, 0.15), 1.20, 3), 136, 1.1667)).toBe(35000);
        });
    });
    describe("maxDefenceRoll()", () => {
        test("returns the max defence roll", () => {
            // max defence roll of abyssal demon according to osrs box calculations
            expect(maxDefenceRoll(effectiveLevel(defenceLevel, 0, 1, 1), 20)).toBe(12096);
        });
    });
    describe("hitChance()", () => {
        test("returns the hit chance", () => {
            const playerAttackRoll = maxAttackRoll(effectiveLevel(attackLevel, potionBoost(attackLevel, 5, 0.15), 1.20, 3), 136, 1.1667);
            const abyssalDemonDefenceRoll = maxDefenceRoll(effectiveLevel(135, 0, 1, 1), 20);
            // hit chance vs abyssal demon according to osrs box calculations
            expect(hitChance(playerAttackRoll, abyssalDemonDefenceRoll)).toBe(0.82717636639);
        });
    });
    describe("damagePerSecond()", () => {
        test("returns the damage per second", () => {
            const playerAttackRoll = maxAttackRoll(effectiveLevel(attackLevel, potionBoost(attackLevel, 5, 0.15), 1.20, 3), 136, 1.1667);
            const abyssalDemonDefenceRoll = maxDefenceRoll(effectiveLevel(135, 0, 1, 1), 20);
            const playerHitChance = hitChance(playerAttackRoll, abyssalDemonDefenceRoll);
            const playerMaxHit = maxHit(effectiveLevel(strengthLevel, potionBoost(strengthLevel, 5, 0.15), 1.23, 0), 133, 1.1667)
            // damage per second vs abyssal demon according to osrs box calculations
            expect(damagePerSecond(playerHitChance, playerMaxHit, 2.4)).toBe(9.30573412189);
        });
    });
});

describe("Boosts", () => {
    describe("potionBoost()", () => {
        test("should boost 5 with super potion at levels 1-6", () => {
            expect(potionBoost(1, 5, 0.15)).toBe(5);
            expect(potionBoost(6, 5, 0.15)).toBe(5);
        });
        test("should boost 19 with super potion at levels 94-99", () => {
            expect(potionBoost(94, 5, 0.15)).toBe(19);
            expect(potionBoost(99, 5, 0.15)).toBe(19);
        });
    });
});