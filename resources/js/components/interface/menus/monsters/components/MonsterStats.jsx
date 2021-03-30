import React from 'react';

const MonsterStats = ({ currentMonsterStats }) => {

    const {combatLevel, attackLevel, strengthLevel, defenceLevel, magicLevel, rangedLevel} = currentMonsterStats.combatStats;
    const {defence_stab, defence_slash, defence_crush, defence_magic, defence_ranged} = currentMonsterStats.defenceBonuses;

    const statSign = (stat) => {
        return stat >= 0 && "+";
    }

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
                    <td className="text-right">Stab: {statSign(defence_stab)}{defence_stab}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Attack_icon.png" alt="Attack icon"/> {attackLevel}</td>
                    <td className="text-right">Slash: {statSign(defence_slash)}{defence_slash}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Strength_icon.png" alt="Strength icon"/> {strengthLevel}</td>
                    <td className="text-right">Crush: {statSign(defence_crush)}{defence_crush}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Defence_icon.png" alt="Defence icon"/> {defenceLevel}</td>
                    <td className="text-right">Magic: {statSign(defence_magic)}{defence_magic}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Magic_icon.png" alt="Magic icon"/> {magicLevel}</td>
                    <td className="text-right">Range: {statSign(defence_ranged)}{defence_ranged}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Ranged_icon.png" alt="Ranged icon"/> {rangedLevel}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default MonsterStats;