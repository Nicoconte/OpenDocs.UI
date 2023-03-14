
import { useEffect } from "react";
import { GetAllAplicationResponse } from "../../../contracts/responses";
import { ApplicationService } from "../../../services/application.service";
import { isErrorResponse } from "../../../utils/api.utils";
import useDashboardStore from "../../../stores/dashboard.store";
import styles from "./ApplicationList.module.css"
import { RiErrorWarningLine } from "react-icons/ri";
import ApplicationItem from "./ApplicationItem/ApplicationItem";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
            <table className="divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grupo</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha creacion</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ultima fecha actualizacion</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {applications.length > 0 && applications.map((a, i) =>
                        <ApplicationItem application={a} />
                    )}
                </tbody>
            </table>
        </div>
    )
}



export default ApplicationList;