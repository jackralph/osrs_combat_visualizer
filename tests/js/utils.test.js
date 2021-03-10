const { TestScheduler } = require('@jest/core')
const {
    maxAttackRoll
} = require('../../resources/js/utils/damage-calc')

describe("attack rolls", () => {
    describe("maxAttackRoll()", () => {
        test("returns the maximum attack roll", () => {
            expect(maxAttackRoll(1, 0)).toBe(64);
        });
    });
});