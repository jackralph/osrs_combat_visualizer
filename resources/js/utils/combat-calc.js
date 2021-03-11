const effectiveLevel = (skillLevel, potionEffect, prayerEffect, combatStyleEffect) => {
    return Math.floor(((skillLevel + potionEffect) * prayerEffect) + combatStyleEffect + 8);
}

const potionBoost = (skillLevel, levelBoostInt, levelBoostPercent) => {
    return Math.floor(levelBoostInt + (skillLevel * levelBoostPercent));
}

const maxHit = (effectiveLevel, equipmentBonus, setBonus, voidSet = false) => {
    if (voidSet) {
        return Math.floor((0.5 + effectiveLevel * (equipmentBonus + 64) / 640) * setBonus);
    } else {
        return Math.floor(Math.floor(0.5 + effectiveLevel * (equipmentBonus + 64) / 640) * setBonus);
    }
}

const maxAttackRoll = (effectiveLevel, equipmentBonus, setBonus = 1) => {
    if (setBonus === 1.1667) {
        return (effectiveLevel * (equipmentBonus + 64)) * 7 / 6;
    } else {
        return (effectiveLevel * (equipmentBonus + 64)) * setBonus;
    }
}

const maxDefenceRoll = (effectiveLevel, equipmentBonus) => {
    return effectiveLevel * (equipmentBonus + 64);
}

const hitChance = (maxAttackRoll, maxDefenceRoll) => {
    if (maxAttackRoll > maxDefenceRoll) {
        return Number((1 - (maxDefenceRoll + 2) / (2 * (maxAttackRoll + 1))).toFixed(11));
    } else {
        return Number((maxAttackRoll / (2 * maxDefenceRoll + 1)).toFixed(11));
    }
}

const damagePerSecond = (hitChance, maxHit, attackInterval) => {
    return Number((hitChance * (maxHit / 2) / attackInterval).toFixed(11));
}

module.exports = {
    effectiveLevel,
    potionBoost,
    maxHit,
    maxAttackRoll,
    maxDefenceRoll,
    hitChance,
    damagePerSecond
}