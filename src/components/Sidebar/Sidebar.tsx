import React from "react";
import { BsBox, BsBoxes, BiHelpCircle, BsGithub } from "react-icons/all";

import styles from "./Sidebar.module.css";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarItem from "./SidebarItem/SidebarItem";


function Sidebar() {
    return (
        <div className={`${styles.sidebarContainer} bg-slate-200 text-slate-600 dark:text-slate-50 dark:bg-cyan-800`}>
            <div className={`${styles.sidebarContent}`}>
                <SidebarItem text="Aplicaciones" icon={<BsBox fontSize={25} />} />
                <SidebarItem text="Tutorial" icon={<BsBoxes fontSize={25} />} />   
                <SidebarItem text="Ayuda" icon={<BiHelpCircle fontSize={25} />} />
            </div>
            <div className={`${styles.sidebarFooter} hover:text-slate-400 dark:hover:text-cyan-500 transition ease-linear`}>
                <SidebarFooter icon={<BsGithub fontSize={18} />} text="(v.0.1)" targetUrl="https://github.com/Nicoconte" />
            </div>
        </div>
    )
}

export default Sidebar;