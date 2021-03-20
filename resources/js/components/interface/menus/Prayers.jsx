import React from 'react';

const Prayers = () => {
    return (
        <div className="row text-center pt-3">
            {prayers.map((prayer, i) => {
                if ((i + 1) % 4 === 0) {
                    return (
                        <React.Fragment key={i}>
                            <div className="col p-1 prayer__icon">
                                <img src={`data:image/png;base64, ${prayer.icon}`} alt={prayer.name}/>
                            </div>
                            <div className="w-100 mb-3"></div>
                        </React.Fragment>
                    )
                }
                return (
                    <div className="col p-1 prayer__icon" key={i}>
                        <img src={`data:image/png;base64, ${prayer.icon}`} alt={prayer.name}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Prayers;