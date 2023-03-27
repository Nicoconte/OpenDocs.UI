
import { useEffect } from "react";
import { GetAllAplicationResponse } from "../../../contracts/responses";
import { ApplicationService } from "../../../services/application.service";
import { isErrorResponse } from "../../../utils/api.utils";
import useDashboardStore from "../../../stores/dashboard.store";
import styles from "./ApplicationList.module.css"
import { RiErrorWarningLine } from "react-icons/ri";
import ApplicationItem from "../Common/ApplicationTable/ApplicationItem/ApplicationItem";
import PaginationButton from "../Common/PaginationButton/PaginationButton";
import useSkeletonStore from "../../../stores/skeleton.store";
import ApplicationTable from "../Common/ApplicationTable/ApplicationTable";

function ApplicationList() {
    const [applications, setApplications, setApplicationsGrouped] = 
        useDashboardStore((state) => [
            state.applications, 
            state.setApplications,
            state.setApplicationsGrouped
        ]);

    const [ setLoading ] = useSkeletonStore((state) => [state.setLoading])

    function fetchApplications() {
        setApplicationsGrouped([]);
        setLoading(true);
        ApplicationService.getAllApplication()
        .then(res => {
            if (!isErrorResponse(res)) {
                setApplications((res as GetAllAplicationResponse).applications)
            }
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchApplications();
    }, [])

    if (!applications.length) {
        return (
            <div className={`${styles.applicationListContainer} ${styles.applicationListNoItem} bg-slate-200`}>
                <RiErrorWarningLine fontSize={35} />
                <h1>No hay aplicaciones registradas</h1>
            </div>
        )
    }

    return (
        <div className={`${styles.applicationListContainer} bg-slate-200`}>
            <ApplicationTable header={["Nombre", "Grupo", "Fecha creacion", "Ultima fecha actualizacion"]}>
                {applications.map((a, i) =><ApplicationItem showGroupName={true} key={i} application={a} />)}
            </ApplicationTable>
            <PaginationButton />
        </div>
    )
}



export default ApplicationList;