import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./PageContainer.module.css";

type PageContainerProps = {
    children: JSX.Element
}

function PageContainer({ children }: PageContainerProps) {
    return (
        <>
            <Navbar />
            <div className={styles.pageContainer}>
                <div className={styles.pageSidebarContainer}>
                    <Sidebar />             
                </div>
                <div className={`${styles.pageContent} bg-slate-400 dark:bg-cyan-900`}>
                    { children }                    
                </div>            
            </div>
        </>
    )
}

export default PageContainer