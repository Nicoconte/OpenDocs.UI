import { useEffect } from "react";
import { GetAllGroupsResponse, GetApplicationByGroupResponse } from "../../../contracts/responses";
import { ApplicationService } from "../../../services/application.service";
import { isErrorResponse } from "../../../utils/api.utils";
import { RiErrorWarningLine } from "react-icons/ri";
import useDashboardStore from "../../../stores/dashboard.store";
import useSkeletonStore from "../../../stores/skeleton.store";
import styles from "./ApplicationGroupedList.module.css"
import { GroupService } from "../../../services/group.service";
import { ApplicationGrouped } from "../../../contracts/application";
import ApplicationTable from "../Common/ApplicationTable/ApplicationTable";
import ApplicationItem from "../Common/ApplicationTable/ApplicationItem/ApplicationItem";
import PaginationButton from "../Common/PaginationButton/PaginationButton";

function ApplicationGroupedList() {
    const [applicationsGrouped, setApplicationsGrouped, setApplications] = 
        useDashboardStore((state) => [
            state.applicationsGrouped, 
            state.setApplicationsGrouped,
            state.setApplications
        ]);

    const [ setLoading ] = useSkeletonStore((state) => [state.setLoading])

    function fetchApplications() {
        setApplications([]);
        setLoading(true);

        GroupService.getAllGroups()
        .then(groupResponse => {
            if (isErrorResponse(groupResponse)) {
                console.log("Hubo un error ", groupResponse);
                setLoading(false);
                return;
            }

            let applicationsContainer = applicationsGrouped;

            (groupResponse as GetAllGroupsResponse).groups!.filter(ag => ag).forEach(group => {
                ApplicationService.getApplicationsByGroup(group).then(applicationResponse => {
                    if (isErrorResponse(applicationResponse)) {
                        console.log("Hubo un error ", applicationResponse)
                        setLoading(false);
                        return;
                    }

                    let applications = (applicationResponse as GetApplicationByGroupResponse).applications;

                    applicationsContainer.push({
                        group: group,
                        applications: applications
                    } as ApplicationGrouped)

                    setApplicationsGrouped(applicationsContainer);
                })
            })

            setLoading(false);
        });
    }

    useEffect(() => {
        fetchApplications();
    }, [])

    if (!applicationsGrouped.length) {
        return (
            <div className={`${styles.applicationGroupedListContainer} ${styles.applicationListNoItem} bg-slate-200`}>
                <RiErrorWarningLine fontSize={35} />
                <h1>No hay aplicaciones registradas</h1>
            </div>
        )
    }

    return (
        <div className={`${styles.applicationGroupedListContainer} bg-slate-200`}>
            {applicationsGrouped.map((ag, i) => 
                <div className={styles.applicationGroupedContainer}>
                    <span className="bg-slate-50">{ag.group}</span>
                    <ApplicationTable key={i} header={["Nombre", "Fecha creacion", "Ultima fecha actualizacion"]}>
                        { ag.applications.map((app, appIndex) => <ApplicationItem showGroupName={false}  key={appIndex} application={app}/>) }
                    </ApplicationTable>
                </div>
            )}
            <PaginationButton />
        </div>
    )
}



export default ApplicationGroupedList;