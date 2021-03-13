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

    const [player, setPlayer] = useState(
        {
            stats: {
                attack: 1,
                strength: 1,
                range: 1,
                mage: 1,
            }
        }
    )

    useEffect(() => {
        console.log(player);
    }, [player]);

    const setNewStats = () => {
        setPlayer({...player, stats: {...player.stats, attack: 5}})
    }

    return (
        <div>
            <button onClick={setNewStats}>Set new stats</button>
        </div>
    );
};

export default CombatVisualizer;