import { chunk } from 'lodash';
import React from 'react';

const InventoryTabs = ({currentTab, setCurrentTab}) => {

    const handleTabClick = ({ target: { dataset : { tabName } } }) => {
        setCurrentTab(tabName);
    }

    const containerClasses = (tabName) => {
        return currentTab === tabName ? "col p-0 interface__tab-container" : "col p-0 interface__tab-container grayscale"
    }

    return (
        <div className="row mb-3 interface">
            <div className={containerClasses("combat_styles")}>
                <img src="/icons/tab-icons/Combat_icon.png" alt="Combat Icon" data-tab-name="combat_styles" onClick={handleTabClick}/>
            </div>
            <div className={containerClasses("levels")}>
                <img src="/icons/tab-icons/Skills_icon.png" alt="Skills Icon" data-tab-name="levels" onClick={handleTabClick}/>
            </div>
            <div className={containerClasses("monsters")}>
                <img src="/icons/tab-icons/Monster_examine_icon.png" alt="Monster Examine Icon" data-tab-name="monsters" onClick={handleTabClick}/>
            </div>
            <div className={containerClasses("inventory")}>
                <img src="/icons/tab-icons/Inventory_icon.png" alt="Inventory Icon" data-tab-name="inventory" onClick={handleTabClick}/>
            </div>
            <div className={containerClasses("equipment")}>
                <img src="/icons/tab-icons/Worn_equipment_icon.png" alt="Worn Equipment Icon" data-tab-name="equipment" onClick={handleTabClick}/>
            </div>
            <div className={containerClasses("prayers")}>
                <img src="/icons/tab-icons/Prayer_tab_icon.png" alt="Prayer Tab Icon" data-tab-name="prayers" onClick={handleTabClick}/>
            </div>
            <div className={containerClasses("spellbook")}>
                <img src="/icons/tab-icons/Spellbook_icon.png" alt="Spellbook Icon" data-tab-name="spellbook" onClick={handleTabClick}/>
            </div>
        </div>
    );
};

export default InventoryTabs;