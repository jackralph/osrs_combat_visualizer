import React, { useState, useEffect } from 'react';
import InventoryTabs from './interface/elements/InventoryTabs';
import Equipment from './interface/menus/equipment/Equipment';
import Inventory from './interface/menus/inventory/Inventory';
import Monsters from './interface/menus/monsters/Monsters';
import Prayers from './interface/menus/prayers/Prayers';

const CombatVisualizer = () => {

    const [currentTab, setCurrentTab] = useState("equipment");

    const [currentMonsterStats, setCurrentMonsterStats] = useState({
        combatStats: {
            combatLevel: 1,
            attackLevel: 1,
            strengthLevel: 1,
            defenceLevel: 1,
            magicLevel: 1,
            rangedLevel: 1
        },
        defenceBonuses: {
            defence_stab: 0,
            defence_slash: 0,
            defence_crush: 0,
            defence_magic: 0,
            defence_ranged: 0
        }
    });

    const [currentEquipmentStats, setCurrentEquipmentStats] = useState({
        attack_crush: 0,
        attack_magic: 0,
        attack_ranged: 0,
        attack_slash: 0,
        attack_stab: 0,
        defence_crush: 0,
        defence_magic: 0,
        defence_ranged: 0,
        defence_slash: 0,
        defence_stab: 0,
        magic_damage: 0,
        melee_strength: 0,
        prayer: 0,
        ranged_strength: 0,
    });

    return (
        <div className="container">
            <InventoryTabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
            {
                currentTab === "inventory" ? <Inventory/> : 
                currentTab === "combat_styles" ? <p>combat style</p> :
                currentTab === "levels" ? <p>levels</p> :
                currentTab === "monsters" ? <Monsters currentMonsterStats={currentMonsterStats} setCurrentMonsterStats={setCurrentMonsterStats} /> :
                currentTab === "equipment" ? <Equipment currentEquipmentStats={currentEquipmentStats} setCurrentEquipmentStats={setCurrentEquipmentStats} /> :
                currentTab === "prayers" ? <Prayers /> :
                <p>Run</p>
            }
        </div>
    );
};

export default CombatVisualizer;