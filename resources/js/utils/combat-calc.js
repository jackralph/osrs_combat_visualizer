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

module.exports = {
    effectiveLevel,
    potionBoost,
    maxHit
}