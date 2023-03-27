
import ApplicationList from "./ApplicationList/ApplicationList";
import styles from "./Dashboard.module.css";
import FilterForm from "./FilterForm/FilterForm";
import useDashboardStore from "../../stores/dashboard.store";
import ApplicationGroupedList from "./ApplicationGroupedList/ApplicationGroupedList";

function Dashboard() {
    const [isGroupCheckboxActive] = useDashboardStore((state) => [state.isGroupCheckboxActive]);    

    return (
        <div className={styles.dashboardContainer}>
            <FilterForm />
            {isGroupCheckboxActive ? <ApplicationGroupedList /> : <ApplicationList />}
        </div>
    )
}

export default Dashboard;