import moment from "moment";
import { Application } from "../../../../../contracts/application";

type ApplicationItemProps = {
    application: Application;
    showGroupName?: boolean
}

function ApplicationItem({ application, showGroupName }: ApplicationItemProps) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.name}</td>
            {showGroupName && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application?.groupId ? application.groupId : "-"}</td>}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(application.createdAt).format("yyyy-MM-DD hh:mm:ss")}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(application.createdAt).fromNow()}</td>            
        </tr>
    )
}

export default ApplicationItem;