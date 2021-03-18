import React from 'react';

const Inventory = () => {
    return (
        <div className="row text-center">
            {potions.map((potion, i) => {
                if ((i + 1) % 4 === 0) {
                    return (
                        <React.Fragment key={potion.id}>
                            <div className="col p-1">
                                <img src={`icons/items-icons/${potion.item_id}.png`} alt={potion.name}/>
                            </div>
                            <div className="w-100 mb-3"></div>
                        </React.Fragment>
                    )
                }
                return (
                    <div className="col p-1" key={potion.id}>
                        <img src={`icons/items-icons/${potion.item_id}.png`} alt={potion.name}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Inventory;