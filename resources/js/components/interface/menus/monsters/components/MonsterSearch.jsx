import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MonsterSearch = ({ handleMonsterSearch }) => {
    return (
        <div className="input-group input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
            <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for monster" onChange={handleMonsterSearch} />
        </div>
    );
};

export default MonsterSearch;