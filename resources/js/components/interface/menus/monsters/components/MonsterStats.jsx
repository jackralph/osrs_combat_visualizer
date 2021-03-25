import React from 'react';

const MonsterStats = ({ currentMonsterStats }) => {

    const {combatLevel, attackLevel, strengthLevel, defenceLevel, magicLevel, rangedLevel} = currentMonsterStats.combatStats;
    const {stab, slash, crush, magic, ranged} = currentMonsterStats.defenceBonuses;

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
                    <td className="text-right">Stab: {statSign(stab)}{stab}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Attack_icon.png" alt="Attack icon"/> {attackLevel}</td>
                    <td className="text-right">Slash: {statSign(slash)}{slash}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Strength_icon.png" alt="Strength icon"/> {strengthLevel}</td>
                    <td className="text-right">Crush: {statSign(crush)}{crush}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Defence_icon.png" alt="Defence icon"/> {defenceLevel}</td>
                    <td className="text-right">Magic: {statSign(magic)}{magic}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Magic_icon.png" alt="Magic icon"/> {magicLevel}</td>
                    <td className="text-right">Range: {statSign(ranged)}{ranged}</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Ranged_icon.png" alt="Ranged icon"/> {rangedLevel}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default MonsterStats;