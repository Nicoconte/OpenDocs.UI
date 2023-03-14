
import { useEffect } from "react";
import { GetAllAplicationResponse } from "../../../contracts/responses";
import { ApplicationService } from "../../../services/application.service";
import { isErrorResponse } from "../../../utils/api.utils";
import useDashboardStore from "../../../stores/dashboard.store";
import styles from "./ApplicationList.module.css"

function ApplicationList() {
    const [applications, setApplications] = useDashboardStore((state) => [state.applications, state.setApplications]);

    function fetchApplications() {
        ApplicationService.getAllApplication().then(res => {
            if (!isErrorResponse(res)) {
                setApplications((res as GetAllAplicationResponse).applications)
            }
        })
    }

    useEffect(() => {
        fetchApplications();
    }, [])

    return (
        <div className={`${styles.applicationListContainer} bg-slate-200`}>
            {applications.length > 0 && applications.map((a, i) => 
                <li key={i}>{a.name}</li>
            )}
        </div>
    )
} 

export default ApplicationList;