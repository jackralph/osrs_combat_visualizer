import React from 'react';

const Equipment = () => {
    return (
        <div className="container equipment pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md equipment__loadout m-auto">
                    <div className="row text-center pb-1">
                        <div className="col">
                            <img src="/icons/default-equipment-icons/Head_slot.png" alt="Head slot"/>
                        </div>
                    </div>
                    <div className="row justify-content-center pb-1">
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Cape_slot.png" alt="Cape slot"/>
                        </div>
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Neck_slot.png" alt="Neck slot"/>
                        </div>
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Ammo_slot.png" alt="Ammo slot"/>
                        </div>
                    </div>
                    <div className="row justify-content-center pb-1">
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Weapon_slot.png" alt="Weapon slot"/>
                        </div>
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Body_slot.png" alt="Body slot"/>
                        </div>
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Shield_slot.png" alt="Shield slot"/>
                        </div>
                    </div>
                    <div className="row text-center pb-1">
                        <div className="col">
                            <img src="/icons/default-equipment-icons/Legs_slot.png" alt="Legs slot"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Hands_slot.png" alt="Hands slot"/>
                        </div>
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Feet_slot.png" alt="Feet slot"/>
                        </div>
                        <div className="col-3 p-0 text-center">
                            <img src="/icons/default-equipment-icons/Ring_slot.png" alt="Ring slot"/>
                        </div>
                    </div>
                </div>
                <div className="col-md table equipment__stats m-auto pt-4 table-responsive table-borderless">
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
                </div>
            </div>
        </div>
        
    );
};

export default Equipment;