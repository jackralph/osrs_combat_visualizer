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

    return (
        <div className="container">
            <div className="row text-center">
                <div className="col p-1"><img src="/images/Combat_icon.png" alt="Combat Icon"/></div>
                <div className="col p-1"><img src="/images/Skills_icon.png" alt="Skills Icon"/></div>
                <div className="col p-1"><img src="/images/Monster_examine_icon.png" alt="Monster Examine Icon"/></div>
                <div className="col p-1"><img src="/images/Inventory_icon.png" alt="Inventory Icon"/></div>
                <div className="col p-1"><img src="/images/Worn_equipment_icon.png" alt="Worn Equipment Icon"/></div>
                <div className="col p-1"><img src="/images/Prayer_tab_icon.png" alt="Prayer Tab Icon"/></div>
                <div className="col p-1"><img src="/images/Spellbook_icon.png" alt="Spellbook Icon"/></div>
            </div>
        </div>
    );
};

export default CombatVisualizer;