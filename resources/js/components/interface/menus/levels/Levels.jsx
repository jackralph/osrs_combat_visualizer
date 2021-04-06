import React from 'react';
import UserSearch from './components/UserSearch';
import UserStats from './components/UserStats';

const Levels = () => {

    const fetchUserStats = (currentUsername) => {
        console.log("searching for " + currentUsername);
    }

    return (
        <div className="container user pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md user__search mr-auto ml-auto pt-4 text-center">
                    <UserSearch fetchUserStats={fetchUserStats}/>
                </div>
                <div className="col-md table user__stats m-auto pt-4 table-responsive table-borderless">
                    <UserStats />
                </div>
            </div>
        </div>
    );
};

export default Levels;