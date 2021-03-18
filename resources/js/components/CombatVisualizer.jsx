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
import InventoryTabs from './interface/elements/InventoryTabs';
import Equipment from './interface/menus/Equipment';
import Inventory from './interface/menus/inventory';
import Prayers from './interface/menus/Prayers';

const CombatVisualizer = () => {

    const [currentTab, setCurrentTab] = useState("inventory");

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
            <InventoryTabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
            {
                currentTab === "inventory" ? <Inventory/> : 
                currentTab === "combat_styles" ? <p>combat style</p> :
                currentTab === "levels" ? <p>levels</p> :
                currentTab === "monsters" ? <p>monsters</p> :
                currentTab === "equipment" ? <Equipment /> :
                currentTab === "prayers" ? <Prayers /> :
                <p>spellbook</p>
            }
        </div>
    );
};

export default CombatVisualizer;