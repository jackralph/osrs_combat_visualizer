import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MonsterSearch = ({ handleMonsterSearch, monsterList }) => {

    const toggleDropDown = () => {
        const monsterDropdownMenu = document.getElementById('monster_dropdown-menu');
        const dropdownVisible = monsterDropdownMenu.classList.contains("dropdown-menu-show");
        
        return dropdownVisible ? monsterDropdownMenu.classList.replace("dropdown-menu-show", "dropdown-menu") : monsterDropdownMenu.classList.replace("dropdown-menu", "dropdown-menu-show");
    }
    
    const selectMonster = (monster) => {
        console.log(monster);
    }

    return (
        <>
            <div className="monster__search-bar input-group input-group-lg rounded-top">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for monster" onFocus={toggleDropDown} onBlur={toggleDropDown} onChange={handleMonsterSearch} />
            </div>
            <div className="monster__dropdown-menu-container">
                <div id="monster_dropdown-menu" className="monster__dropdown-menu dropdown-menu border">
                    {monsterList.map((monster, i) => {
                        return <a key={i} className="monster__dropdown-item dropdown-item" onMouseDown={() => selectMonster(monster)}>{monster.wiki_name}: <img src="/icons/tab-icons/Combat_icon.png" alt="Combat icon"/> {monster.combat_level}</a>
                    })}
                </div>
            </div>
        </>
    );
};

export default MonsterSearch;