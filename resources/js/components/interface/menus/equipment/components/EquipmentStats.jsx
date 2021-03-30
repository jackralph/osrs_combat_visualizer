import React from 'react';

const EquipmentStats = ({ currentEquipmentStats }) => {

    // console.log(currentEquipmentStats);
    
    const {
        attack_crush, 
        attack_magic, 
        attack_ranged, 
        attack_slash, 
        attack_stab,
        defence_crush, 
        defence_magic, 
        defence_ranged, 
        defence_slash, 
        defence_stab,
        magic_damage,
        melee_strength,
        prayer,
        ranged_strength,
    } = currentEquipmentStats; 

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
                        <td>Stab: {statSign(attack_stab)}{attack_stab}</td>
                        <td className="text-right">Stab: {statSign(defence_stab)}{defence_stab}</td>
                    </tr>
                    <tr>
                        <td>Slash: {statSign(attack_slash)}{attack_slash}</td>
                        <td className="text-right">Slash: {statSign(defence_slash)}{defence_slash}</td>
                    </tr>
                    <tr>
                        <td>Crush: {statSign(attack_crush)}{attack_crush}</td>
                        <td className="text-right">Crush: {statSign(defence_crush)}{defence_crush}</td>
                    </tr>
                    <tr>
                        <td>Magic: {statSign(attack_magic)}{attack_magic}</td>
                        <td className="text-right">Magic: {statSign(defence_magic)}{defence_magic}</td>
                    </tr>
                    <tr>
                        <td>Ranged: {statSign(attack_ranged)}{attack_ranged}</td>
                        <td className="text-right">Ranged: {statSign(defence_ranged)}{defence_ranged}</td>
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
                        <td>Melee strength: {statSign(melee_strength)}{melee_strength}</td>
                        <td className="text-right">Undead: {statSign(0)}{0}</td>
                    </tr>
                    <tr>
                        <td>Ranged strength: {statSign(ranged_strength)}{ranged_strength}</td>
                        <td className="text-right">Slayer: {statSign(0)}{0}</td>
                    </tr>
                    <tr>
                        <td>Magic damage: {statSign(magic_damage)}{magic_damage}%</td>
                    </tr>
                    <tr>
                        <td>Prayer: {statSign(prayer)}{prayer}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default EquipmentStats;