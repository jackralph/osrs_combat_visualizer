import React from 'react';

const EquipmentSlots = ({ selectSlot }) => {
    return (
        <React.Fragment>
            <div className="row text-center pb-1">
                <div className="col">
                    <img src="/icons/default-equipment-icons/Head_slot.png" alt="Head slot" data-slot="head" onClick={selectSlot} />
                </div>
            </div>
            <div className="row justify-content-center pb-1">
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Cape_slot.png" alt="Cape slot" data-slot="cape" onClick={selectSlot} />
                </div>
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Neck_slot.png" alt="Neck slot" data-slot="neck" onClick={selectSlot} />
                </div>
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Ammo_slot.png" alt="Ammo slot" data-slot="ammo" onClick={selectSlot} />
                </div>
            </div>
            <div className="row justify-content-center pb-1">
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Weapon_slot.png" alt="Weapon slot" data-slot="weapon" onClick={selectSlot} />
                </div>
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Body_slot.png" alt="Body slot" data-slot="body" onClick={selectSlot} />
                </div>
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Shield_slot.png" alt="Shield slot" data-slot="shield" onClick={selectSlot} />
                </div>
            </div>
            <div className="row text-center pb-1">
                <div className="col">
                    <img src="/icons/default-equipment-icons/Legs_slot.png" alt="Legs slot" data-slot="leg" onClick={selectSlot} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Hands_slot.png" alt="Hands slot" data-slot="hand" onClick={selectSlot} />
                </div>
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Feet_slot.png" alt="Feet slot" data-slot="foot" onClick={selectSlot} />
                </div>
                <div className="col-3 p-0 text-center">
                    <img src="/icons/default-equipment-icons/Ring_slot.png" alt="Ring slot" data-slot="ring" onClick={selectSlot} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default EquipmentSlots;