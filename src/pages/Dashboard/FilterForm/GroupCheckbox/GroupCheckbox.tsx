import useDashboardStore from "../../../../stores/dashboard.store";

import styles from "./GroupCheckbox.module.css";

function GroupCheckbox() {
    const [isGroupCheckboxActive, setIsGroupCheckboxActive] = useDashboardStore((state) => [state.isGroupCheckboxActive, state.setIsGroupCheckboxActive]);

    function handleToggle() {
        setIsGroupCheckboxActive(!isGroupCheckboxActive);
    }

    return (
        <div className={styles.groupCheckboxContainer}>
            <label className={styles.switch}>
                <input type="checkbox" value={`${isGroupCheckboxActive}`} onClick={handleToggle} />
                <div className={styles.slider}></div>
            </label>
            <span className="text-slate-700">Agrupar aplicaciones</span>
        </div>
    );
}

export default GroupCheckbox;