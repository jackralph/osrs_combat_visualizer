import React from 'react';

const EquipmentStats = () => {
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
                        <td>Stab: +0</td>
                        <td className="text-right">Stab: +0</td>
                    </tr>
                    <tr>
                        <td>Slash: +0</td>
                        <td className="text-right">Slash: +0</td>
                    </tr>
                    <tr>
                        <td>Crush: +0</td>
                        <td className="text-right">Crush: +0</td>
                    </tr>
                    <tr>
                        <td>Magic: +0</td>
                        <td className="text-right">Magic: +0</td>
                    </tr>
                    <tr>
                        <td>Range: +0</td>
                        <td className="text-right">Range: +0</td>
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
                        <td>Melee strength: +0</td>
                        <td className="text-right">Undead: 0%</td>
                    </tr>
                    <tr>
                        <td>Range strength: +0</td>
                        <td className="text-right">Slayer: 0%</td>
                    </tr>
                    <tr>
                        <td>Magic damage: +0%</td>
                    </tr>
                    <tr>
                        <td>Prayer: +0</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default EquipmentStats;