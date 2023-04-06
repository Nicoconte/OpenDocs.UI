
import styles from "./Dashboard.module.css";
import FilterForm from "./FilterForm/FilterForm";
import useDashboardStore from "../../stores/dashboard.store";

function Dashboard() {
    const [isGroupCheckboxActive] = useDashboardStore((state) => [state.isGroupCheckboxActive]);    

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardFilterFormContainer}>
                <FilterForm />
            </div>
            <div className={styles.dashboardApplicationContainer}>
                {/* {isGroupCheckboxActive ? <ApplicationGroupedList /> : <ApplicationList />} */}
            </div>
        </div>
    )
}

export default Dashboard;