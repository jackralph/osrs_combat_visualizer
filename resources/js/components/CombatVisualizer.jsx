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

    const [playerLoadout, setPlayerLoadout] = useState(
        {
            levels: {
                attack: 1,
                strength: 1,
                range: 1,
                mage: 1,
            },
            
            potions: {

            },

            prayers: {

            },

            equipment: {

            },
            
            combatStyle: "melee",

            attackStyle: "accurate"
        }
    )

    useEffect(() => {
        console.log(playerLoadout);
    }, [playerLoadout]);

    const setNewStats = () => {
        setPlayerLoadout({...playerLoadout, stats: {...playerLoadout.stats, attack: 5}})
    }

    return (
        <div>
            <button onClick={setNewStats}>Set new stats</button>
        </div>
    );
};

export default CombatVisualizer;