type SidebarFooterProps = {
    icon: JSX.Element,
    text: string,
    targetUrl: string
}

function SidebarFooter({ icon, text, targetUrl }: SidebarFooterProps) {
    return (
        <a target="_blank" href={targetUrl}>
            {icon}
            <span>{text}</span>
        </a>
    )
}

export default SidebarFooter;