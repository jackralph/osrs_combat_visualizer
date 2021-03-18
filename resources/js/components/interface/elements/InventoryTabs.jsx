import { chunk } from 'lodash';
import React from 'react';

const InventoryTabs = ({ setCurrentTab }) => {

    const handleTabClick = ({ target: { dataset : { tabName } } }) => {
        setCurrentTab(tabName);
    }

    return (
        <div className="row mb-3 interface">
            <div className="col p-0 interface__tab-container" data-tab-name="combat_styles" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Combat_icon.png" alt="Combat Icon"/>
            </div>
            <div className="col p-0 interface__tab-container" data-tab-name="levels" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Skills_icon.png" alt="Skills Icon"/>
            </div>
            <div className="col p-0 interface__tab-container" data-tab-name="monsters" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Monster_examine_icon.png" alt="Monster Examine Icon"/>
            </div>
            <div className="col p-0 interface__tab-container" data-tab-name="inventory" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Inventory_icon.png" alt="Inventory Icon"/>
            </div>
            <div className="col p-0 interface__tab-container" data-tab-name="equipment" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Worn_equipment_icon.png" alt="Worn Equipment Icon"/>
            </div>
            <div className="col p-0 interface__tab-container" data-tab-name="prayers" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Prayer_tab_icon.png" alt="Prayer Tab Icon"/>
            </div>
            <div className="col p-0 interface__tab-container" data-tab-name="spellbook" onClick={handleTabClick}>
                <img src="/icons/tab-icons/Spellbook_icon.png" alt="Spellbook Icon"/>
            </div>
        </div>
    );
};

export default InventoryTabs;