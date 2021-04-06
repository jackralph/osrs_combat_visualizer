import React from 'react';

const UserStats = () => {
    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">Combat stats</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="/icons/tab-icons/Combat_icon.png" alt="Combat icon"/> 1</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Attack_icon.png" alt="Attack icon"/> 1</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Strength_icon.png" alt="Strength icon"/> 1</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Defence_icon.png" alt="Defence icon"/> 1</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Magic_icon.png" alt="Magic icon"/> 1</td>
                </tr>
                <tr>
                    <td><img src="/icons/skill-icons/Ranged_icon.png" alt="Ranged icon"/> 1</td>
                </tr>
            </tbody>
        </table>
    );
};

export default UserStats;