const maxAttackRoll = (effectiveLevel, equipmentBonus) => {
    return effectiveLevel * (equipmentBonus + 64);
}

module.exports = {
    maxAttackRoll
}