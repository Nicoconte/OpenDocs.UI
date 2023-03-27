export interface ApplicationTableProps {
    header: string[],
    children: JSX.Element | JSX.Element[]
}

function ApplicationTable({ header, children }: ApplicationTableProps) {
    return (
        <table className="divide-y divide-gray-200">
            <thead>
                <tr>
                    {header.map((a, i) => (
                        <th key={i} className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{a}</th>                        
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
        </table>        
    )
}

export default ApplicationTable;