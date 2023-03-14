
import ApplicationList from "./ApplicationList/ApplicationList";
import styles from "./Dashboard.module.css";
import FilterForm from "./FilterForm/FilterForm";
import PaginationButton from "./ApplicationList/PaginationButton/PaginationButton";

function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <FilterForm />
            <ApplicationList />
        </div>
    )
}

export default Dashboard;