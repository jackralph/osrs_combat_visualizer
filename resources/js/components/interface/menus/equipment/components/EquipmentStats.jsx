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
                        <td>Stab: {statSign(attackBonuses.attack_stab)}{attackBonuses.attack_stab}</td>
                        <td className="text-right">Stab: {statSign(defenceBonuses.defence_stab)}{defenceBonuses.defence_stab}</td>
                    </tr>
                    <tr>
                        <td>Slash: {statSign(attackBonuses.attack_slash)}{attackBonuses.attack_slash}</td>
                        <td className="text-right">Slash: {statSign(defenceBonuses.defence_slash)}{defenceBonuses.defence_slash}</td>
                    </tr>
                    <tr>
                        <td>Crush: {statSign(attackBonuses.attack_crush)}{attackBonuses.attack_crush}</td>
                        <td className="text-right">Crush: {statSign(defenceBonuses.defence_crush)}{defenceBonuses.defence_crush}</td>
                    </tr>
                    <tr>
                        <td>Magic: {statSign(attackBonuses.attack_magic)}{attackBonuses.attack_magic}</td>
                        <td className="text-right">Magic: {statSign(defenceBonuses.defence_magic)}{defenceBonuses.defence_magic}</td>
                    </tr>
                    <tr>
                        <td>Ranged: {statSign(attackBonuses.attack_ranged)}{attackBonuses.attack_ranged}</td>
                        <td className="text-right">Ranged: {statSign(defenceBonuses.defence_ranged)}{defenceBonuses.defence_ranged}</td>
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
                        <td>Ranged strength: {statSign(otherBonuses.ranged_strength)}{otherBonuses.ranged_strength}</td>
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