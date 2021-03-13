import React, { useState, useEffect } from 'react';
import { 
    effectiveLevel, 
    potionBoost, 
    maxHit,
    maxAttackRoll,
    maxDefenceRoll,
    hitChance,
    damagePerSecond
} from '../utils/combat-calc';

const CombatVisualizer = () => {

    const [playerAttackLevel, setPlayerAttackLevel] = useState(1);
    const [playerAttackPotionEffect, setPlayerAttackPotionEffect] = useState(0);
    const [playerAttackPrayerEffect, setPlayerAttackPrayerEffect] = useState(1);
    const [playerAttackCombatStyleEffect, setPlayerAttackCombatStyleEffect] = useState(3);

    const [playerAttackEquipmentBonus, setPlayerAttackEquipmentBonus] = useState(0);
    const [playerAttackSetBonus, setPlayerAttackSetBonus] = useState(1);

    const [playerStrengthLevel, setPlayerStrengthLevel] = useState(1);
    const [playerStrengthPotionEffect, setPlayerStrengthPotionEffect] = useState(0);
    const [playerStrengthPrayerEffect, setPlayerStrengthPrayerEffect] = useState(1);
    const [playerStrengthCombatStyleEffect, setPlayerStrengthCombatStyleEffect] = useState(0);

    const [playerStrengthEquipmentBonus, setPlayerStrengthEquipmentBonus] = useState(0);
    const [playerStrengthSetBonus, setPlayerStrengthSetBonus] = useState(1);

    const [playerVoidSet, setPlayerVoidSet] = useState(false);

    const [playerAttackSpeed, setPlayerAttackSpeed] = useState(2.4);
    
    const [playerEffectiveAttackLevel, setPlayerEffectiveAttackLevel] = useState(
        effectiveLevel(playerAttackLevel, playerAttackPotionEffect, playerAttackPrayerEffect, playerAttackCombatStyleEffect)
    );

    const [playerEffectiveStrengthLevel, setPlayerEffectiveStrengthLevel] = useState(
        effectiveLevel(playerStrengthLevel, playerStrengthPotionEffect, playerStrengthPrayerEffect, playerStrengthCombatStyleEffect)
    );

    const [playerMaxHit, setPlayerMaxHit] = useState(
        maxHit(playerEffectiveStrengthLevel, playerStrengthEquipmentBonus, playerStrengthSetBonus, playerVoidSet)
    )

    const [playerMaxAttackRoll, setPlayerMaxAttackRoll] = useState(
        maxAttackRoll(playerAttackLevel, playerAttackEquipmentBonus, playerAttackSetBonus)
    )

    const [monsterMaxDefenceRoll, setMonsterMaxDefenceRoll] = useState(
        maxDefenceRoll(effectiveLevel(135, 0, 1, 1), 20)
    )
    
    const [playerHitChance, setPlayerHitChance] = useState(
        hitChance(playerMaxAttackRoll, monsterMaxDefenceRoll)
    )

    const [playerDamagePerSecond, setPlayerDamagePerSecond] = useState(
        damagePerSecond(playerHitChance, playerMaxHit, playerAttackSpeed)
    )

    return (
        <div>
            <p>Effective Attack Level: {playerEffectiveAttackLevel}</p>
            <p>Effective Strength Level: {playerEffectiveStrengthLevel}</p>
            <p>Max Hit: {playerMaxHit}</p>
            <p>Max Attack Roll: {playerMaxAttackRoll}</p>
            <p>Monster Max Defence Roll: {monsterMaxDefenceRoll}</p>
            <p>Hit Chance: {playerHitChance}</p>
            <p>DPS: {playerDamagePerSecond}</p>
        </div>
    );
};

export default CombatVisualizer;