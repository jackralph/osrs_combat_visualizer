import React from 'react';

const EquipmentStats = ({ currentEquipmentStats }) => {
    
    const {attackBonuses, defenceBonuses, otherBonuses, targetSpecific} = currentEquipmentStats; 

    const statSign = (stat) => {
        return stat >= 0 && "+";
    }
    return (
        <React.Fragment>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Attack bonuses</th>
                        <th scope="col" className="text-right">Defence bonuses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stab: {statSign(attackBonuses.stab)}{attackBonuses.stab}</td>
                        <td className="text-right">Stab: {statSign(defenceBonuses.stab)}{defenceBonuses.stab}</td>
                    </tr>
                    <tr>
                        <td>Slash: {statSign(attackBonuses.slash)}{attackBonuses.slash}</td>
                        <td className="text-right">Slash: {statSign(defenceBonuses.slash)}{defenceBonuses.slash}</td>
                    </tr>
                    <tr>
                        <td>Crush: {statSign(attackBonuses.crush)}{attackBonuses.crush}</td>
                        <td className="text-right">Crush: {statSign(defenceBonuses.crush)}{defenceBonuses.crush}</td>
                    </tr>
                    <tr>
                        <td>Magic: {statSign(attackBonuses.magic)}{attackBonuses.magic}</td>
                        <td className="text-right">Magic: {statSign(defenceBonuses.magic)}{defenceBonuses.magic}</td>
                    </tr>
                    <tr>
                        <td>Ranged: {statSign(attackBonuses.ranged)}{attackBonuses.ranged}</td>
                        <td className="text-right">Range: {statSign(defenceBonuses.ranged)}{defenceBonuses.ranged}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Other bonuses</th>
                        <th scope="col" className="text-right">Target-specific</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Melee strength: {statSign(otherBonuses.melee_strength)}{otherBonuses.melee_strength}</td>
                        <td className="text-right">Undead: {statSign(targetSpecific.undead)}{targetSpecific.undead}</td>
                    </tr>
                    <tr>
                        <td>Range strength: {statSign(otherBonuses.ranged_strength)}{otherBonuses.ranged_strength}</td>
                        <td className="text-right">Slayer: {statSign(targetSpecific.slayer)}{targetSpecific.slayer}</td>
                    </tr>
                    <tr>
                        <td>Magic damage: {statSign(otherBonuses.magic_damage)}{otherBonuses.magic_damage}%</td>
                    </tr>
                    <tr>
                        <td>Prayer: {statSign(otherBonuses.prayer)}{otherBonuses.prayer}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default EquipmentStats;