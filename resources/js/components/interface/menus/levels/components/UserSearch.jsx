import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const UserSearch = ({ fetchUserStats }) => {

    const [currentUsername, setCurrentUsername] = useState("");

    return (
        <>
            <div className="user__search-bar input-group input-group-lg rounded-top">
                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for user" value={currentUsername} onChange={(e) => setCurrentUsername(e.target.value)} />
                <div className="input-group-append">
                    <span className="input-group-text user__search-button" id="inputGroup-sizing-lg">
                        <FontAwesomeIcon icon={faSearch} onClick={() => fetchUserStats(currentUsername)}/>
                    </span>
                </div>
            </div>
        </>
    );
};

export default UserSearch;