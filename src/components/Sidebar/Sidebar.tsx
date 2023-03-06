import React from "react";
import { BsBox, BsBoxes, BiHelpCircle, BsGithub } from "react-icons/all";

import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";


function Sidebar() {
    return (
        <div className={`${styles.sidebarContainer} bg-slate-200 text-slate-600`}>
            <div className={`${styles.sidebarContent}`}>
                <SidebarItem text="Aplicaciones" icon={<BsBox fontSize={25} />} />
                <SidebarItem text="Grupos" icon={<BsBoxes fontSize={25} />} />   
                <SidebarItem text="Ayuda" icon={<BiHelpCircle fontSize={25} />} />
            </div>
            <div className={`${styles.sidebarFooter}`}>
                <a target="_blank" href="https://github.com/Nicoconte"><BsGithub fontSize={18} /></a>
            </div>
        </div>
    )
}

export default Sidebar;