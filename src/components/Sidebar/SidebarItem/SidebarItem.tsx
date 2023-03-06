import React from "react";

import styles from "./SidebarItem.module.css"

type SidebarItemProps = {
    icon: JSX.Element,
    text: string
}

function SidebarItem({ icon, text }: SidebarItemProps) {
    return (
        <div className={`${styles.sidebarItemContainer} hover:bg-slate-700 hover:text-slate-200 hover:cursor-pointer`}>
            <div className={styles.sidebarItemIcon}>
                {icon}
            </div>
            <div className={styles.sidebarItemText}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default SidebarItem;
