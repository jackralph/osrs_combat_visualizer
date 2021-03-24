import React, { useState, useEffect } from 'react';
import InventoryTabs from './interface/elements/InventoryTabs';
import Equipment from './interface/menus/equipment/Equipment';
import Inventory from './interface/menus/inventory/Inventory';
import Monsters from './interface/menus/monsters/Monsters';
import Prayers from './interface/menus/prayers/Prayers';

const CombatVisualizer = () => {

    const [currentTab, setCurrentTab] = useState("monsters");

    const [currentMonsterStats, setCurrentMonsterStats] = useState({
        combatStats: {
            combatLevel: 1,
            attackLevel: 1,
            strengthLevel: 1,
            defenceLevel: 1,
            magicLevel: 1,
            rangeLevel: 1
        },
        defenceBonuses: {
            stab: 0,
            slash: 0,
            crush: 0,
            magic: 0,
            range: 0
        }
    });

    return (
        <div className="container">
            <InventoryTabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
            {
                currentTab === "inventory" ? <Inventory/> : 
                currentTab === "combat_styles" ? <p>combat style</p> :
                currentTab === "levels" ? <p>levels</p> :
                currentTab === "monsters" ? <Monsters currentMonsterStats={currentMonsterStats} setCurrentMonsterStats={setCurrentMonsterStats} /> :
                currentTab === "equipment" ? <Equipment /> :
                currentTab === "prayers" ? <Prayers /> :
                <p>Run</p>
            }
        </div>
    );
};

export default CombatVisualizer;