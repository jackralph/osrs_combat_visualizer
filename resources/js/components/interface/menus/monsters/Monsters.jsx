import React, { useState } from 'react';
import MonsterSearch from './components/MonsterSearch';
import MonsterStats from './components/MonsterStats';
import axios from "axios";

const Monsters = () => {

    const [monsterList, setMonsterList] = useState();

    const handleMonsterSearch = ({ target: { value } }) => {
        axios.get('/monsters', { params: { searchQuery: value }});
    }

    return (
        <div className="container monster pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md monster__search mr-auto ml-auto pt-4 text-center">
                    <MonsterSearch handleMonsterSearch={handleMonsterSearch}/>
                </div>
                <div className="col-md table monster__stats m-auto pt-4 table-responsive table-borderless">
                    <MonsterStats />
                </div>
            </div>
        </div>
    );
};

export default Monsters;