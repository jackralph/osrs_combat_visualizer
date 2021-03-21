import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const Monsters = () => {

    const [monsterList] = useState(monsters);

    return (
        <div className="container monster pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md table monster__stats m-auto pt-2 table-responsive table-borderless">
                    <Autocomplete
                    id="combo-box-demo"
                    options={monsterList}
                    getOptionLabel={(monster) => `${monster.wiki_name} - Lvl: ${monster.combat_level}`}
                    style={{ margin: "auto", paddingBottom: "20px" }}
                    renderInput={(monsters) => <TextField {...monsters} label="Select monster" variant="outlined" />}
                    />
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Combat stats</th>
                                <th scope="col" className="text-right">Defence bonuses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="/icons/tab-icons/Combat_icon.png" alt="Combat icon"/> 1</td>
                                <td className="text-right">Stab: +0</td>
                            </tr>
                            <tr>
                                <td><img src="/icons/skill-icons/Attack_icon.png" alt="Attack icon"/> 1</td>
                                <td className="text-right">Slash: +0</td>
                            </tr>
                            <tr>
                                <td><img src="/icons/skill-icons/Strength_icon.png" alt="Strength icon"/> 1</td>
                                <td className="text-right">Crush: +0</td>
                            </tr>
                            <tr>
                                <td><img src="/icons/skill-icons/Defence_icon.png" alt="Defence icon"/> 1</td>
                                <td className="text-right">Magic: +0</td>
                            </tr>
                            <tr>
                                <td><img src="/icons/skill-icons/Magic_icon.png" alt="Magic icon"/> 1</td>
                                <td className="text-right">Range: +0</td>
                            </tr>
                            <tr>
                                <td><img src="/icons/skill-icons/Ranged_icon.png" alt="Ranged icon"/> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Monsters;