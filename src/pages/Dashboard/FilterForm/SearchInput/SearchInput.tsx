
import useDashboardStore from "../../../../stores/dashboard.store";
import styles from "./SearchInput.module.css";

function SearchInput() {
    const isGroupCheckboxActive = useDashboardStore((state) => state.isGroupCheckboxActive);

    return (
        <div className={styles.searchInputContainer}>
            <input type="text" placeholder={isGroupCheckboxActive ? "Nombre del grupo" : "Nombre de la aplicacion"} />
        </div>
    )
}

export default SearchInput;