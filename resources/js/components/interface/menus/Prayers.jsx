import React from 'react';

const Prayers = () => {
    return (
        <div className="row text-center">
            {prayers.map((prayer, i) => {
                if ((i + 1) % 4 === 0) {
                    return (
                        <React.Fragment key={i}>
                            <div className="col p-1">
                                <img src={`/icons/prayers-icons/${prayer.prayer_id}.png`} alt={prayer.name}/>
                            </div>
                            <div className="w-100 mb-3"></div>
                        </React.Fragment>
                    )
                }
                return (
                    <div className="col p-1" key={i}>
                        <img src={`/icons/prayers-icons/${prayer.prayer_id}.png`} alt={prayer.name}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Prayers;