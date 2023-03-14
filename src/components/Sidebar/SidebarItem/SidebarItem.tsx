import useMenuTogglerStore from "../../../stores/menutoggler.store";

import styles from "./SidebarItem.module.css"

type SidebarItemProps = {
    icon: JSX.Element,
    text: string
}

function SidebarItem({ icon, text }: SidebarItemProps) {
    const isOpen = useMenuTogglerStore((state) => state.isOpen);

    return (
        <div title={text} className={`${styles.sidebarItemContainer} hover:bg-slate-700 dark:hover:bg-cyan-500 hover:text-slate-200 hover:cursor-pointer transition ease-linear`}>
            <div className={isOpen ? styles.sidebarItemIcon : styles.sidebarItemIconWrapper}>
                {icon}
            </div>
            <div className={`${isOpen ? styles.sidebarItemText : styles.sidebarItemTextHidden}`}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default SidebarItem;
