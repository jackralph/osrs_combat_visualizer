import React from 'react';

const Equipment = () => {
    return (
        <div className="container equipment">
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
    );
};

export default Equipment;