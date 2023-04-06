
import styles from "./FilterForm.module.css";
import GroupCheckbox from "./GroupCheckbox/GroupCheckbox";
import SearchInput from "./SearchInput/SearchInput";

function FilterForm() {
    return (
        <div className={`${styles.filterFormContainer}`}>
            <div className={styles.filterForm}>
                <SearchInput />
                <GroupCheckbox />
            </div>
        </div>
    )
}

export default FilterForm;