import React from 'react';

const MonsterStats = ({ currentMonsterStats }) => {

    const {combatLevel, attackLevel, strengthLevel, defenceLevel, magicLevel, rangeLevel} = currentMonsterStats.combatStats;
    const {stab, slash, crush, magic, range} = currentMonsterStats.defenceBonuses;

    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">Combat stats</th>
                    <th scope="col" className="text-right">Defence bonuses</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="/icons/tab-icons/Combat_icon.png" alt="Combat icon"/> {combatLevel}</td>
                    <td className="text-right">Stab: +{stab}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Attack_icon.png" alt="Attack icon"/> {attackLevel}</td>
                    <td className="text-right">Slash: +{slash}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Strength_icon.png" alt="Strength icon"/> {strengthLevel}</td>
                    <td className="text-right">Crush: +{crush}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Defence_icon.png" alt="Defence icon"/> {defenceLevel}</td>
                    <td className="text-right">Magic: +{magic}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Magic_icon.png" alt="Magic icon"/> {magicLevel}</td>
                    <td className="text-right">Range: +{range}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Ranged_icon.png" alt="Ranged icon"/> {rangeLevel}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default MonsterStats;