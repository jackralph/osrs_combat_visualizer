import React, { useState, useEffect } from 'react';
import { 
    effectiveLevel, 
    potionBoost, 
    maxHit 
} from '../utils/combat-calc';

const CombatVisualizer = () => {

    const [playerAttackLevel, setPlayerAttackLevel] = useState(1);
    const [playerAttackPotionEffect, setPlayerAttackPotionEffect] = useState(0);
    const [playerAttackPrayerEffect, setPlayerAttackPrayerEffect] = useState(1);
    const [playerAttackCombatStyleEffect, setPlayerAttackCombatStyleEffect] = useState(3);

    const [playerStrengthLevel, setPlayerStrengthLevel] = useState(1);
    const [playerStrengthPotionEffect, setPlayerStrengthPotionEffect] = useState(0);
    const [playerStrengthPrayerEffect, setPlayerStrengthPrayerEffect] = useState(1);
    const [playerStrengthCombatStyleEffect, setPlayerStrengthCombatStyleEffect] = useState(0);

    const [playerStrengthEquipmentBonus, setPlayerStrengthEquipmentBonus] = useState(0);
    const [playerStrengthSetBonus, setPlayerStrengthSetBonus] = useState(1);

    const [playerVoidSet, setPlayerVoidSet] = useState(false);
    
    const [playerEffectiveAttackLevel, setPlayerEffectiveAttackLevel] = useState(
        effectiveLevel(playerAttackLevel, playerAttackPotionEffect, playerAttackPrayerEffect, playerAttackCombatStyleEffect)
    );

    const [playerEffectiveStrengthLevel, setPlayerEffectiveStrengthLevel] = useState(
        effectiveLevel(playerStrengthLevel, playerStrengthPotionEffect, playerStrengthPrayerEffect, playerStrengthCombatStyleEffect)
    );

    const [playerMaxHit, setPlayerMaxHit] = useState(
        maxHit(playerEffectiveStrengthLevel, playerStrengthEquipmentBonus, playerStrengthSetBonus, playerVoidSet)
    )

    useEffect(() => {
        setPlayerEffectiveStrengthLevel(effectiveLevel(
            playerStrengthLevel, 
            playerStrengthPotionEffect, 
            playerStrengthPrayerEffect, 
            playerStrengthCombatStyleEffect
        ))
    }, [playerStrengthLevel, playerStrengthPotionEffect, playerStrengthPrayerEffect, playerStrengthCombatStyleEffect]);

    return (
        <div>
            <p>Effective Attack Level: {playerEffectiveAttackLevel}</p>
            <p>Effective Strength Level: {playerEffectiveStrengthLevel}</p>
            <p>Max Hit: {playerMaxHit}</p>
            <button onClick={() => setPlayerStrengthCombatStyleEffect(3)}>Aggressive</button>
            <button onClick={() => setPlayerStrengthLevel(playerStrengthLevel + 1)}>Increase Strength Level</button>
        </div>
    );
};

export default CombatVisualizer;