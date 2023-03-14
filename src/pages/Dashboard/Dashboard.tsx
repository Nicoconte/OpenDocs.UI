
import ApplicationList from "./ApplicationList/ApplicationList";
import styles from "./Dashboard.module.css";
import FilterForm from "./FilterForm/FilterForm";
import PaginationButton from "./PaginationButton/PaginationButton";

function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <FilterForm />
            <ApplicationList />
            <PaginationButton />
        </div>
    )
}

export default Dashboard;