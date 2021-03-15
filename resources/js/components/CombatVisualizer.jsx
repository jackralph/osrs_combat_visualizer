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
import Inventory from './menus/inventory';

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

    const handleTabClick = ({ target: { name } }) => {
        setCurrentTab(name);
    }

    return (
        <div className="container">
            <div className="row text-center mb-3">
                <div className="col p-1">
                    <img src="/images/Combat_icon.png" name="combat_styles" onClick={handleTabClick} alt="Combat Icon"/>
                </div>
                <div className="col p-1">
                    <img src="/images/Skills_icon.png" name="levels" onClick={handleTabClick} alt="Skills Icon"/>
                </div>
                <div className="col p-1">
                    <img src="/images/Monster_examine_icon.png" name="monsters" onClick={handleTabClick} alt="Monster Examine Icon"/>
                </div>
                <div className="col p-1">
                    <img src="/images/Inventory_icon.png" name="inventory" onClick={handleTabClick} alt="Inventory Icon"/>
                </div>
                <div className="col p-1">
                    <img src="/images/Worn_equipment_icon.png" name="equipment" onClick={handleTabClick} alt="Worn Equipment Icon"/>
                </div>
                <div className="col p-1">
                    <img src="/images/Prayer_tab_icon.png" name="prayers" onClick={handleTabClick} alt="Prayer Tab Icon"/>
                </div>
                <div className="col p-1">
                    <img src="/images/Spellbook_icon.png" name="spellbook" onClick={handleTabClick} alt="Spellbook Icon"/>
                </div>
            </div>
            {
                currentTab === "inventory" ? <Inventory /> : 
                currentTab === "combat_styles" ? <p>combat style</p> :
                currentTab === "levels" ? <p>levels</p> :
                currentTab === "monsters" ? <p>monsters</p> :
                currentTab === "equipment" ? <p>equipment</p> :
                currentTab === "prayers" ? <p>prayers</p> :
                <p>spellbook</p>
            }
        </div>
    );
};

export default CombatVisualizer;